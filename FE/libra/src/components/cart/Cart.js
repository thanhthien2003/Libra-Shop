import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { getAllCart } from "../../service/CartService";
import { Card, CardImg, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cart() {

  const [userName,setUserName] = useState("");
  const [listCart,setListCart] = useState(null);

  
  const handleGetUserName = async () => {
      const res = await infoAccountByJwtToken();
      if (res !== undefined) {
          setUserName(res.sub);
      }
  }

 

  

  const handleGetAllCart = async () => {
    if(userName !== ""){
     const res = await getAllCart(userName);
     console.log("null",res);
    setListCart(res) 
    } else{
      setListCart(null);
    }
    // if(listCart !== null){
    //   handleTotal();
    // }
  }

//   const handleTotal = async () => {
//        const res = await listCart.reduce((sum,cart) => {
//     return sum + (cart.price * cart.quantityCart);
// },0);
//       setTotalPrice(res);
//       handleGetAllCart();
//   }

const totalAmount = listCart !== null
  ? listCart.reduce((accumulator, cart) => {
      return accumulator + cart.price * cart.quantityCart;
    }, 0)
  : 0;

  console.log("list:", listCart);

  useEffect(() => {
      handleGetUserName();
      handleGetAllCart();
      window.scrollTo(0,0);
  },[userName])

  if(listCart === null){
    return null;
  }
    return(
        <>
        <Header />
         <div>
        <div style={{marginTop: '100px'}}>
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
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
                      {listCart !== null ? listCart.map((cart,index) => {
                        return(
                          <>
                           <tr>
                        <td style={{display:"grid"}} className="product-thumbnail">
                          <img style={{placeSelf: "center"}}   src={cart.imageProduct} width={200}  className="img-fluid" />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{cart.nameProduct}</h2>
                        </td>
                        <td>${cart.price}</td>
                        <td>
                          <div className="input-group mb-3" style={{maxWidth: '200px'}}>
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                            </div>
                            <input  style={{minWidth: '70px',width: '70px'}} type="button" value={cart.quantityCart} />
                            <div className="input-group-append">
                              <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                            </div>
                          </div>
                        </td>
                        <td>${cart.price * cart.quantityCart}</td>
                        <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                      </tr>
                          </>
                        )
                      }): 
                      <div>
                      <h1 style={{textAlign: "center"}}>No product in your cart</h1>
                      </div>}
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
                        <strong className="text-black">${totalAmount}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${totalAmount}</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
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