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
        name: {
            first: '',
            last: '',
        },
        logoImage: '',
        id: '',
        email: '',
        phone: '',
    }
};