import {IRoutes} from '../interfaces/IRoutes'

class Router {
    private routes:Array<IRoutes>;
    private history:History;
    private location:Location;
    private routesRegExp:Array<RegExp>;

    constructor() {
        this.routes = [];
        this.routesRegExp = [];
        this.history = window.history;
        this.location = window.location;
    }

    public init() {
        for(let i = 0; i < this.routes.length; i++) {
            this.routesRegExp.push(this.urlToRegExp(this.routes[i].path));
        }

        this.onUrlChange();
        this.checkCurrentUrl();
    }

    public registerRouts(routes:Array<IRoutes>) {
        this.routes.push(...routes);
    }

    public redicrect(path: string) {
        let route = this.getRoute(path);
        if (route === undefined) {
            throw Error('This route has not registered')
        } else {
            this.history.pushState(null, '', path);
            let params = this.getRouteParams(path);
            if (params === null) {
                route.handler()
            } else {
                route.handler(params);
            }
        }
    }

    private getRouteParams(path: string) {
        let match = path.match(/[0-9]+/);
        if (match !==  null) {
            return match[0];
        }
        return null;
    }

    private getRoute(path: string):IRoutes | undefined {
        for (let i = 0; i < this.routesRegExp.length; i++) {
            if (path.search(this.routesRegExp[i]) !== -1) {
                return this.routes[i];
            }
        }
    }

    private urlToRegExp(url: string): RegExp{
        return new RegExp(url.replace(/\//g, '\\\/').replace(/{id}/, '([0-9]+)'));
    }


    private onUrlChange() {
        window.addEventListener('popstate', () => {
            let path = this.location.pathname;
            this.redicrect(path);
        });
    }

    private checkCurrentUrl() {
        let path = this.location.pathname;
        this.redicrect(path);
    }
}

export default new Router();
