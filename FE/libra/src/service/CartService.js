import axios from "axios";

export const getAllCart = async (userName) => {
    const res = (await axios.get(`http://localhost:8080/api/cart?user_name=${userName}`))
    return res.data;
}

export const getAllTotalCart = async (userName) => {
    const res = (await axios.get(`http://localhost:8080/api/cart?user_name=${userName}`))
    return res.data.length;
}

export const addToCart = async (quantity,cart) => {
        return await axios.post(`http://localhost:8080/api/cart/create?quantity=${quantity}`,cart);
}
export const addToCartOfDetail = async (quantity,cart) => {
    try {
        return await axios.post(`http://localhost:8080/api/cart/create/detail?quantity=${quantity}`,cart);
    } catch (error) {
        console.log(error);
    }
}

export const reduceToCart = async (productId,userName) => {
    try {
        return await axios.post(`http://localhost:8080/api/cart/reduce?productId=${productId}&userName=${userName}`)
    } catch (error) {
        console.log(error);   
    }
}

export const createOrder = async (cart,userName,totalAmount) => {
    try {
        return await axios.post(`http://localhost:8080/api/order/create?userName=${userName}&totalAmount=${totalAmount}`,cart)
    } catch (error) {
        console.log(error);
    }
}