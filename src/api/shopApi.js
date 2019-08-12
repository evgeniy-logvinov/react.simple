import axios from '../lib/http';

class ShopApi {
    static getProducts() {
        return axios.get('/shop/products');
    }
}

export default ShopApi;