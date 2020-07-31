import * as Handlebars from 'handlebars';

export default class View {
    private data: any;
    private inner:Element;
    private selector: string;

    constructor (selector:string) {
        this.selector = selector;
        let element = document.querySelector(this.selector);
        if (element) {
            this.inner = element;
        } else {
            throw Error('The element exists in the page.');
        }
    }

    setData(data:any) {
        this.data = data;
    }

    render(selector: string) {
        let source = document.querySelector(selector)?.innerHTML;
        let template = Handlebars.compile(source);
        this.inner.innerHTML = template({data: this.data});
    }
}