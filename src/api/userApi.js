import axios from '../lib/http';

class UserApi {
    static getUserInfo() {
        return axios.get('/users/user');
    }

    static createUser(user) {
        return axios.put('/users/user', user);
    }

    static updateUser(user) {
        return axios.post('/users/user', user);
    }
}

export default UserApi;