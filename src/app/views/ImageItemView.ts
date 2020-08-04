import View from './View';

export default class ImageItemView extends View {
    constructor(selector:string) {
        super(selector);
    }

    public handlerOverlayClick(handler: Function) {
        let overlay = document.querySelector('.modal-overlay');

        overlay?.addEventListener('click', (event) => {
            if (event.target === event.currentTarget) {
                overlay?.classList.toggle('active', false);
                handler();
            }
        });
    }

    public render(selector: string) {
        super.render(selector);
    }
}