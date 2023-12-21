import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {toast} from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import { infoAccountByJwtToken } from '../../service/AccountService';
import { addToCart } from '../../service/CartService';

function Cards ({element}) {
    // const [userName,setUserName] = useState("");
    const navigate = useNavigate();
    // const userName = infoAccountByJwtToken().sub;
    // const cart={
    //         quantity : 1,
    //         userName : userName,
    //         productId : element.idProduct
    // }
    // const handleGetUserName = async () => {
    //     const res = await infoAccountByJwtToken();
    //     if (res !== undefined) {
    //         setUserName(res.sub);
    //     }
    // }
    // console.log(userName);
    // console.log(cart);
    const handleDetail = () => {
        navigate(`/detail/${element.idProduct}`)
    }

    const handleAddToCart = async () => {
        const token = await infoAccountByJwtToken();
        console.log("token",token);
        if(token === undefined){
            navigate("/login");
        }else{
        const res = await addToCart({
            quantity : 1,
            userName : token.sub,
            productId : element.idProduct})
            console.log(res);
        if(res.status == 201){
            toast("Add to cart success")
        } else{
            toast.error("Fail add to cart")
        }
        }
    }

    useEffect(() => {
        // handleGetUserName()
    },[])
    
    return(
        <>
             <Card className="my-card">
            <i>
                <Card.Img variant="top" style={{width: '100%', height: "300px"}}
                          src={`${element.imageProduct}`} onClick={handleDetail}/>
            </i>
            <Card.Body>
                <Card.Title>
                    <p className="product-card-title">{element.nameProduct}</p>
                </Card.Title>
                <Card.Text style={{color: "#0e0d0d"}}>
                   {element.priceProduct} $
                </Card.Text>
                <button className="my-card-btn" onClick={handleAddToCart}><FaCartShopping />
                </button>
            </Card.Body>
        </Card>
        </>
    )

}
// 
export default Cards;

