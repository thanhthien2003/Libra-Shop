import axios from "axios";

export const getAllCart = async (userName) => {
    const res = (await axios.get(`http://localhost:8080/api/cart?user_name=${userName}`))
    return res.data;
}

export const addToCart = async (cart) => {
    try {
        return await axios.post(`http://localhost:8080/api/cart/create`,cart);
    } catch (error) {
        console.log(error);
    }
}