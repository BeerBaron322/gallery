import {IImageItem} from '../interfaces/IImageItem';


export default class Model {
    private baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

    public getImages(): Promise<Array<IImageItem>> {
        let request = fetch(this.baseUrl);
        return request.then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    public getImage(id:number):Promise<IImageItem> {
        let request = fetch(`${this.baseUrl}/${id}`);
        return request.then((response) => {
            return response.json();
        }).catch((error) => {
            console.error(error);
        });
    }
}
