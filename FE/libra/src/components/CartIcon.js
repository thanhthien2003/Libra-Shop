import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { infoAccountByJwtToken } from "../service/AccountService";
import { getAllCart, getAllTotalCart } from "../service/CartService";
function CartIcon(props) {
    // const [totalItem,setTotalItem] = useState(0);
    // const [listCart, setListCart] = useState([]);
    // const handleGetAllCart = async () => {
    //     const res1 =  infoAccountByJwtToken();
    //     if (res1.sub !== "") {
    //       const res = await getAllTotalCart(res1.sub);
    //       setTotalItem(res);
    //     } else {
    //       setTotalItem([]);
    //     }
    //   }

    //   useEffect(() => {
    //     handleGetAllCart();
    //   },[totalItem])
    
    //   if (totalItem === null) {
    //     return null;
    //   }
    console.log(props.props1);
    return (
        <>
            <Link to={"/cart"} style={{scale:"1.7"}}>
                <FaCartShopping  />
            </Link>
            {/* <span className="cart__product-quantity">{totalItem >= 50 ? '+50' : totalItem}</span> */}
        </>
    )
}

export default CartIcon;