import axios from 'axios';

const ajax = axios.create({
    baseURL: (process.env.REACT_APP_BASE_URL !== undefined) ? process.env.REACT_APP_BASE_URL : '//trackerapp.local/'
})

ajax.CancelToken = axios.CancelToken
ajax.isCancel = axios.isCancel

/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
ajax.interceptors.request.use(
    (config) => {
        let token = sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

export default ajax;
