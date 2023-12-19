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

function Header() {
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const handleGetUserName = async () => {
        const res = await infoAccountByJwtToken();
        if (res !== undefined) {
            setUserName(res.sub);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setUserName(null);
        setJwtToken(undefined)
        toast("Log out success")
    }
    console.log(userName);
    useEffect(() => {
        handleGetUserName();
    }, [])


    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="index.html" className="logo">
                                    <img style={{ width: 30 + '%' }} src="../../images/logoLibra.png" />
                                </a>
                                <ul className="nav">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li className="scroll-to-section"><a href="#men">Men's</a></li>
                                    <li className="scroll-to-section"><a href="#women">Women's</a></li>
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
                                        </div>
                                    </li>
                                    {userName === null ?
                                        <li><Link to={"/login"}>Login</Link></li>
                                        :
                                        <div style={{marginBottom: "20px"}}>
                                           <Dropdown >
                                            <Dropdown.Toggle  style={{padding: "0 0", border: "none", backgroundColor: "transparent"}}>
                                                 <li>
                                                  <a  href="#offcanvas-about">
                                                  <RxAvatar />   {userName}
                                                    </a>  
                                                </li>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/history">
                                                    <div  style={{ color: "black" }}><BiHistory /> History </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/customer">
                                                    <div ><BsInfoSquare />Information</div>
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
