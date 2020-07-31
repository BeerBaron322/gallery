import View from './View';

export default class ImageListView extends View {
    constructor (selector:string) {
        super(selector);
    }

    public handlerItemClick(handler: Function) {
        let itemsLink = document.querySelectorAll('.gallery .gallery_item .item_link');
        itemsLink.forEach((itemLink) => {
            itemLink.addEventListener('click', (event) => {
                event.preventDefault();
                let path: URL;
                if (event.currentTarget instanceof HTMLAnchorElement) {
                    path = new URL(event.currentTarget.href);
                } else {
                    return;
                }
                handler(path.pathname);
            });
        });
    }

    public render(selector: string) {
        super.render(selector);
    }
}