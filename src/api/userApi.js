import axios from '../lib/http';

class UserApi {
    static getUserInfo() {
        return axios.get('/users/user');
    }
}

export default UserApi;