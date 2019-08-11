import axios from '../lib/http';

class SessionApi {
    static login(credentials) {
        return axios.post('/security/login', credentials);
    }
}

export default SessionApi;