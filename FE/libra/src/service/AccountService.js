import axios from "axios";
import jwtDecode from "jwt-decode";


export const loginUser = async (account) => {
    const res = await  axios.post(`http://localhost:8080/api/signin`,account)
    return res;
}   

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT",jwtToken);
}

export const infoAccountByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");
    if(jwtToken){
        const res = jwtDecode(jwtToken)
        console.log(res);
        return res;
    }
}

export const getAccountByUserName = async (userName) => {
    const res = await axios.get(`http://localhost:8080/api/find-by-id/${userName}`)
    return res.data;
}