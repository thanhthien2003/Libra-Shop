import axios from "axios";

export const getAllProduct = async (name,price,brand,color,size,type,page,sort) => {
    const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-`]/;
    if(specialCharactersRegex.test(name)){
        return {status:204};
    } else {
      const res = await  axios.get(`http://localhost:8080/api/product?name=${name}&price=${price}&brand=${brand}&color=${color}&size=${size}&type=${type}&page=${page}&sort=${sort}`)
    return res  
    }
    // const sanitizedName = name ? name.replace(/`/g, "") : "";   
}   

export const detailProduct = async (idProduct) => {
    const res = await axios.get(`http://localhost:8080/api/product/${idProduct}`)
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
export const getTypeList = async () => {
        const res = await axios.get(`http://localhost:8080/api/product/type`)
        return res.data;
}

export const getSizeList = async () => {
        const res = await axios.get(`http://localhost:8080/api/product/size`)
        return res.data;
}

export const getColorList = async () => {
        const res = await axios.get(`http://localhost:8080/api/product/color`)
        return res.data;
}