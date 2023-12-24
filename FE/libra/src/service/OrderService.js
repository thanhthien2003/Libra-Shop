import axios from "axios";

export const getAllOrder = async (userName) => {
    const res = await axios.get(`http://localhost:8080/api/order?userName=${userName}`)
    return res
}

export const getAllOrderDetail = async (userName,idOrder) => {
    const res = await axios.get(`http://localhost:8080/api/order/detail?userName=${userName}&orderId=${idOrder}`)
    return res
}