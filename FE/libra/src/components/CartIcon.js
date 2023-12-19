import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function CartIcon() {
    return (
        <>
            <Link to={"/cart"} style={{scale:"1.5"}}>
                <FaCartShopping  />
            </Link>
        </>
    )
}

export default CartIcon;