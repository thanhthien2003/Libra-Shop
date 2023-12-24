import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { getAccountByUserName, infoAccountByJwtToken } from "../../service/AccountService";
import { addToCart, getAllCart, reduceToCart } from "../../service/CartService";
import { Card, CardImg, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Paypal } from "./Paypal";
import { toast } from "react-toastify";


function Cart() {

  // const userName = infoAccountByJwtToken().sub;
  const [userName, setUserName] = useState("");
  const [listCart, setListCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account,setAccount] = useState({});
  const navigate = useNavigate();


  const handleGetUserName = async () => {
    const res = await infoAccountByJwtToken();
    if (res !== undefined) {
      setUserName(res.sub);
    }
  }
  const handleGetAccount = async () => {
    if(userName !== ""){
      const res = await getAccountByUserName(userName);
    if(res !== null){
      setAccount(res);
    } 
    }
  }

  const handleGetAllCart = async () => {
    if (userName !== "") {
      console.log(userName);
      const res = await getAllCart(userName);
      setListCart(res)
    } else {
      setListCart([]);
    }
  }
  const handleIncreaseCart = async (cart) => {
    console.log("cart", cart);
    const res = await addToCart(1, cart);
    console.log("resCart", res);
    if (res.status === 204) {
      toast.error("We have only " + cart.quantityProduct + " pieces of this product ");
    }
    setCheckout(false);
    handleGetAllCart();
  }
  const handleReload = () => {
    setLoading(!loading);
  }

  const handleDecreaseCart = async (cart) => {
    const res = await reduceToCart(cart.productId, userName);
    setCheckout(false);
    handleGetAllCart();
  }

  const totalAmount = (listCart != [])
    ? listCart.reduce((accumulator, cart) => {
      return accumulator + cart.price * cart.quantityCart;
    }, 0)
    : 0;

  const handleDetail = (value) => {
    navigate(`/detail/${value.productId}`)
  }
  console.log("list:", listCart);

  useEffect(() => {
    handleGetUserName();
    handleGetAllCart();
    handleGetAccount();
    window.scrollTo(0, 0);
  }, [userName,loading])

  if (listCart === null) {
    return null;
  }
  return (
    <>
      <Header />
      <div>
        <div style={{ marginTop: '100px' }}>
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <div className="section-heading" style={{ textAlign: 'center' }}>
                  <h2>Your shopping cart</h2>
                  <span>Buy now</span>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail table-dark">Image</th>
                        <th className="product-name table-dark">Product name</th>
                        <th className="product-price table-dark">Size</th>
                        <th className="product-price table-dark">Brand</th>
                        <th className="product-price table-dark">Price</th>
                        <th className="product-quantity table-dark">Quantity</th>
                        <th className="product-total table-dark">Total</th>
                        {/* <th className="product-remove">Remove</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {listCart != [] && listCart.map((cart, index) => {
                        return (
                          <>
                            <tr>
                              <td style={{ display: "grid" }} className="product-thumbnail">
                                <img style={{ placeSelf: "center" }} src={cart.imageProduct} onClick={() => handleDetail(cart)} width={200} className="img-fluid" />
                              </td>
                              <td className="product-name">
                                <h2 className="h5 text-black">{cart.nameProduct}</h2>
                              </td>
                              <td>
                                {cart.sizeProduct}
                              </td>
                              <td>
                                {cart.brandProduct}
                              </td>
                              <td>${new Intl.NumberFormat().format(cart.price)}</td>
                              <td>
                                <div className="input-group mb-3" style={{ maxWidth: '200px' }}>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => handleDecreaseCart(cart)}>−</button>
                                  </div>
                                  <input style={{ minWidth: '70px', width: '70px', backgroundColor: 'white', borderColor: '#007BFF' }}
                                    type="button" value={cart.quantityCart} />
                                  <div className="input-group-append">
                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => handleIncreaseCart(cart)}>+</button>
                                  </div>
                                </div>
                                <div>
                                  Inventory : {cart.quantityProduct}
                                </div>
                              </td>
                              <td>${new Intl.NumberFormat().format(cart.price * cart.quantityCart)}</td>
                              {/* <td><a href="#" className="btn btn-primary btn-sm">X</a></td> */}
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <Link to={`/product`} className="btn btn-outline-dark btn-sm btn-block">Continue Shopping</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${new Intl.NumberFormat().format(totalAmount)}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${new Intl.NumberFormat().format(totalAmount)}</strong>
                      </div>
                    </div>
                    <div className="row  ml-1">
                      <h5>Address: </h5> <span className="ml-2">{account.address}</span>
                      <h5>Phone number: </h5> <span className="ml-2">{account.phoneNumber}</span>
                      
                    </div>
                    <div className="row ml-1 mb-2">
                      <div >
                         <button className="btn btn-dark" onClick={() => navigate("/customer")}>Edit</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {checkout ? (
                          <Paypal props1={totalAmount} props2={listCart} props3={handleReload} />
                        ) : (
                          <div className="checkout_btn">
                            <button className="btn btn-primary btn-lg py-3 btn-block" onClick={() => setCheckout(true)}>Payments</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Cart;