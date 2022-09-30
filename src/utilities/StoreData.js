
const addToDb = _id => {
    let sessionCart = {};


    const storedCart = localStorage.getItem('session-cart');
    if (storedCart) {
        sessionCart = JSON.parse(storedCart);
    }


    const quantity = sessionCart[_id];
    if (quantity) {
        const newQuantity = quantity + 1;
        sessionCart[_id] = newQuantity;
    }
    else {
        sessionCart[_id] = 1;
    }
    localStorage.setItem('session-cart', JSON.stringify(sessionCart));
}

const getStoredCart = () => {
    let sessionCart = {};


    const storedCart = localStorage.getItem('session-cart');
    if (storedCart) {
        sessionCart = JSON.parse(storedCart);
    }
    return sessionCart;
}

const removeFromDb = _id => {
    const storedCart = localStorage.getItem('session-cart');
    if (storedCart) {
        const sessionCart = JSON.parse(storedCart);
        if (_id in sessionCart) {
            delete sessionCart[_id];
            localStorage.setItem('session-cart', JSON.stringify(sessionCart));
        }
    }
}

const deleteSessionCart = () => {
    localStorage.removeItem('session-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteSessionCart
}