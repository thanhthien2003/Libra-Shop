import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { detailProduct } from "../../service/ProductService";


function DetailProduct({product}){
  const [productDetail,setProductDetail] = useState(null);
  const handleGetProduct = async () => {
    setProductDetail(await detailProduct(product.idProduct));
  }
  useEffect(() => {
    handleGetProduct()
  },[]);

  if(productDetail === null){
    return null;
  }
  console.log(productDetail);
    return(
        <>
        <Header />
         <section className="section mt-5 pt-5" id="product" >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src="assets/images/single-product-01.jpg" alt="" />
                <img src="assets/images/single-product-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>New Green Jacket</h4>
                <span className="price">$75.00</span>
                <ul className="stars">
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                </ul>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                <div className="quote">
                  <i className="fa fa-quote-left" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input type="button" defaultValue="-" className="minus" /><input type="number" step={1} min={1} max name="quantity" defaultValue={1} title="Qty" className="input-text qty text" size={4} pattern inputMode /><input type="button" defaultValue="+" className="plus" />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: $210.00</h4>
                  <button className="btn" style={{marginLeft: '5px', borderRadius: '10px', background: 'linear-gradient(90deg, rgba(208,243,245,1) 42%, rgb(133,249,255) 100%)'}}><a href="cart.html" style={{color: 'black'}}>Add To Cart</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
        </>
    )
}
export default DetailProduct;