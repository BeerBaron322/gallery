import Model from '../models/Model'
import ImageListView from '../views/ImageListView';
import ImageItemView from '../views/ImageItemView';
import Router from './Router';

export default class Controller {
    model: Model;
    imageListView: ImageListView;
    imageItemView: ImageItemView;

    constructor () {
        this.model = new Model();
        this.imageListView = new ImageListView('.main');
        this.imageItemView = new ImageItemView('.modal-overlay');
    }


    loadImages() {
        this.model.getImages().then(data => {
            this.imageListView.setData(data);
            this.imageListView.render('#list_template');
            this.imageListView.handlerItemClick(this.itemClickHandler);
        })
    }

    loadImage(id: number) {
        this.model.getImage(id).then(data => {
            this.imageItemView.setData(data);
            this.imageItemView.render("#item_tempale");
            this.imageItemView.handlerOverlayClick(this.overlayClickHandler);
        })
    }

    itemClickHandler(path: string) {
        Router.redicrect(path);
    }

    overlayClickHandler() {
        Router.redicrect('/list');
    }
}


