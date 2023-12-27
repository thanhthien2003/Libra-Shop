import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { toast } from "react-toastify";
import "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { BsInfoSquare } from "react-icons/bs";
import { BiLogOut, BiHistory } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import CartIcon from "../CartIcon";
import { getAllTotalCart } from "../../service/CartService";

function Header() {
    const [userName, setUserName] = useState("");
    const [totalItem,setTotalItem] = useState(0);
    // const userName = infoAccountByJwtToken().sub;
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const handleGetUserName = async () => {
        const res = await infoAccountByJwtToken();
        if (res !== undefined) {
            setUserName(res.sub);
        }
    }
  
    const handleGetAllCart = async () => {
        if (userName !== "") {
          const res = await getAllTotalCart(userName);
          setTotalItem(res);
        } else {
          setTotalItem(0);
        }
      }

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setUserName("");
        setJwtToken(undefined)
        toast("Log out success")
    }
    useEffect(() => {
        handleGetUserName();
        handleGetAllCart();
    },[userName,totalItem])


    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to={"/"} className="logo">
                                    <img style={{ width: 30 + '%' }} src="../../images/logoLibra.png" />
                                </Link>
                                <ul className="nav">
                                    <li><Link to={"/"}>Home</Link></li>
                                    {/* <li className="scroll-to-section"><Link href="#saller">Best Saller</Link></li>
                                    <li className="scroll-to-section"><Link href="#new">New Product</Link></li> */}
                                    <li><Link to={"/product"}>Product</Link></li>
                                    <li className="submenu">
                                        <a href="javascript:">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="detail-product.html">Single Product</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><a href="#">Features Page 1</a></li>
                                            <li><a href="#">Features Page 2</a></li>
                                            <li><a href="#">Features Page 3</a></li>
                                            <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template
                                                Page 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section">
                                        <div>
                                        <CartIcon />
                                        <span className="cart__product-quantity">{totalItem >= 50 ? '+50' : totalItem}</span>
                                        </div>
                                    </li>
                                    {userName === "" ?
                                        <li><Link to={"/login"}>Login</Link></li>
                                        :
                                        <div style={{marginBottom: "20px"}}>
                                           <Dropdown >
                                            <Dropdown.Toggle  style={{padding: "0 0", border: "none", backgroundColor: "transparent"}}>
                                                 <li>
                                                  <a>
                                                  <RxAvatar />   {userName}
                                                    </a>  
                                                </li>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to={"/history"}  style={{ color: "black" }}><BiHistory /> History </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to={"/customer"}  style={{ color: "black" }}><BsInfoSquare />Information</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <div  onClick={() => handleLogout()}><BiLogOut /> Đăng xuất</div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> 
                                        </div>
                                        }
                                </ul>


                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
