import './assets/scss/main.scss';
import Router from './app/controller/Router';
import Controller from './app/controller/GalleryController';

let controller = new Controller();
let links = document.querySelectorAll('a');
let router = Router;


router.registerRouts([
    {path: '/list', handler: controller.loadImages.bind(controller)},
    {path: '/item_{id}', handler: (id: number) => {
        controller.loadImage.bind(controller)(id);
    }}
])
router.init();

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let path: URL;
        if (event.target instanceof HTMLAnchorElement) {
            path = new URL(event.target.href);
        } else {
            return;
        }
        router.redicrect(path.pathname);
    });
});
    








