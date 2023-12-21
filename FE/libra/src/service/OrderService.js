import axios from "axios";

export const getAllOrder = async (userName) => {
    const res = await axios.get(`http://localhost:8080/api/order?userName=${userName}`)
    return res.data
}