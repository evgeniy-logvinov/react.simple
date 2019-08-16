import axios from '../lib/http';

class ShopApi {
    static getProducts() {
        return axios.get('/shop/products');
    }

    static postBasket(basket) {
        return axios.post('/shop/basket', { products: basket.products });
    }
}

export default ShopApi;