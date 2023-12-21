import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { addToCart, getAllCart, reduceToCart } from "../../service/CartService";
import { Card, CardImg, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Paypal } from "./Paypal";


function Cart() {

  // const userName = infoAccountByJwtToken().sub;
  const [userName,setUserName] = useState("");
  const [listCart, setListCart] = useState([]);
  const [checkout, setCheckout] = useState(false);


  const handleGetUserName = async () => {
    const res = await infoAccountByJwtToken();
    if (res !== undefined) {
      setUserName(res.sub);
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
      const res = await addToCart(cart);
      setCheckout(false);
      handleGetAllCart();
  }

  const handleDecreaseCart = async (cart) => {
      const res = await reduceToCart(cart.productId,userName);
      setCheckout(false);
      handleGetAllCart();
  }

  const totalAmount = (listCart != [])
    ? listCart.reduce((accumulator, cart) => {
      return accumulator + cart.price * cart.quantityCart;
    }, 0)
    : 0;

  // console.log("list:", listCart);

  useEffect(() => {
    handleGetUserName();
    handleGetAllCart();
    window.scrollTo(0, 0);
  }, [userName])

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
              <div className="section-heading" style={{textAlign:'center'}}>
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
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product name</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listCart != [] && listCart.map((cart, index) => {
                        return (
                          <>
                            <tr>
                              <td style={{ display: "grid" }} className="product-thumbnail">
                                <img style={{ placeSelf: "center" }} src={cart.imageProduct} width={200} className="img-fluid" />
                              </td>
                              <td className="product-name">
                                <h2 className="h5 text-black">{cart.nameProduct}</h2>
                              </td>
                              <td>${new Intl.NumberFormat().format(cart.price)}</td>
                              <td>
                                <div className="input-group mb-3" style={{ maxWidth: '200px' }}>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => handleDecreaseCart(cart)}>−</button>
                                  </div>
                                  <input style={{ minWidth: '70px', width: '70px',backgroundColor:'white',borderColor:'#007BFF' }} 
                                  type="button" value={cart.quantityCart} />
                                  <div className="input-group-append">
                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => handleIncreaseCart(cart)}>+</button>
                                  </div>
                                </div>
                              </td>
                              <td>${new Intl.NumberFormat().format(cart.price * cart.quantityCart)}</td>
                              <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
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
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                  </div>
                  <div className="col-md-6">
                    <Link to={`/product`} className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</Link>
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
                    <div className="row">
                      <div className="col-md-12">
                        {checkout ? (
                          <Paypal props1={totalAmount} props2={listCart} />
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