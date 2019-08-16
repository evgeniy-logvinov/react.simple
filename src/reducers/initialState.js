export default {
    session: !!sessionStorage.token,
    shop: {
        products: [],
        basket: {
            ticketId: '',
            products: [],
        },
        tickets: [],
    },
    userInfo: {
        user: {
            first: '',
            last: '',
        },
        logoImage: '',
        id: '',
        email: '',
        phone: '',
    }
};