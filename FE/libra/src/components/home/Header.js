import { Link } from "react-router-dom";

function Header() {
        return(
        <>
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <img style={{width: 30 + '%'}} src="../../images/logoLibra.png"/>
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
                                <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                                <li><Link to={"/login"}>Login</Link></li>
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
