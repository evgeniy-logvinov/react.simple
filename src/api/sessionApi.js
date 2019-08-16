import axios from '../lib/http';

class SessionApi {
    static login(credentials) {
        return axios.post('/security/login', credentials);
    }

    static logout() {
        return axios.post('/security/logout');
    }
}

export default SessionApi;