import axios from "axios";

export const getAllProduct = async (name,price,brand,color,size,type,page,sort) => {
    const res = await  axios.get(`http://localhost:8080/api/product?name=${name}&price=${price}&brand=${brand}&color=${color}&size=${size}&type=${type}&page=${page}&sort=${sort}`)
    return res
}   

export const detailProduct = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/product/${id}`)
    return res.data
}

export const bestSallerList = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/best-saller`)
    return res.data;
}

export const newProductList = async () => {
    const res = await axios.get(`http://localhost:8080/api/product/new-product`)
    return res.data;
}