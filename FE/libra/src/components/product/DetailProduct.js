import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { detailProduct, getBrandListOfProduct, getColorListOfProduct, getSizeListOfProduct, getTypeListOfProduct } from "../../service/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { addToCart, addToCartOfDetail } from "../../service/CartService";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";


function DetailProduct() {
  const param = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [typeOfProduct, setTypeOfProduct] = useState([]);
  const [sizeOfProduct, setSizeOfProduct] = useState([]);
  const [colorOfProduct, setColorOfProduct] = useState([]);
  const [brandOfProduct, setBrandOfProduct] = useState([]);
  const [brandSelect, setBrandSelect] = useState(0);
  const [sizeSelect, setSizeSelect] = useState(0);

  const handleGetProduct = async () => {
    const res = await detailProduct(param.id);
    console.log("res", res);
    if (res.status === 400) {
      setProductDetail(undefined)
    }
    setProductDetail(res);
    const typeRes = await getTypeListOfProduct(res.nameProduct);
    const sizeRes = await getSizeListOfProduct(res.typeProduct);
    const colorRes = await getColorListOfProduct(res.nameProduct);
    const brandRes = await getBrandListOfProduct(res.nameProduct);
    setTypeOfProduct(typeRes);
    setSizeOfProduct(sizeRes);
    setColorOfProduct(colorRes);
    setBrandOfProduct(brandRes);
  }

  const handleAddToCart = async () => {
    const token = await infoAccountByJwtToken();
    console.log("token", token);
    if (token === undefined) {
      navigate("/login");
    } else {
      if(sizeSelect === 0){
        toast.error("Please choose one size you want!")
      } else{
        const res = await addToCartOfDetail(count, {
        quantityCart: count,
        userName: token.sub,
        idType: productDetail.idType,
        idSize: sizeSelect
      })
      console.log(res);
      if (res.status === 201) {
        toast("Add to cart success")
      } else  {
        toast.error("To much this product , please check you cart!")
      }
      }
    }
  }

  const increCount = () => {
    setCount((count) => count + 1);
  }
  const decreCount = () => {
    if (count !== 1) {
      setCount((count) => count - 1);
    }
  }
  useEffect(() => {
    handleGetProduct();
    window.scrollTo(0, 0);
  }, []);
  console.log("param", param);

  if (productDetail === null || typeOfProduct === null || sizeOfProduct === null || colorOfProduct === null || brandOfProduct === null) {
    return null;
  }
  console.log(productDetail);

  return (
    <>
      <Header />

      <section className="section mt-5 pt-5" id="product" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <div className="section-heading" style={{ textAlign: 'center' }}>
                <h2>Detail Products</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ border: "1px SOLID" }}>
            <div className="col-lg-8">
              <div className="left-images">
                <img src={productDetail.imageProduct} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{productDetail.nameProduct}</h4>
                <span className="price">${new Intl.NumberFormat().format(productDetail.priceProduct)}</span>
                {/* <ul className="stars">
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                </ul> */}
                <div  className="quote">
                <p className="mb-1">Size</p>
                  {sizeOfProduct != [] && sizeOfProduct.map((size) => (
                    <>
                      <div class="form-check form-check-inline">
                        <input type="radio" style={{ display: "none" }} className="btn-check" name="options-outlined" id={size.id} key={size.id} autoComplete="off" />
                        <label className="btn btn-light" id="ThienPT" style={{ cursor: "pointer" }} onClick={() => setSizeSelect(size.id)} htmlFor={size.id}>{size.nameSize}</label>
                      </div>
                    </>
                  ))}
                  {/* <h5>{productDetail.sizeProduct}</h5> */}
                </div>
                {/* <div className="quote">
                  <p className="mb-1">Brand</p>
                  {brandOfProduct != [] && brandOfProduct.map((brand) => (
                    <>
                
                      <input type="radio" style={{display:"none"}} className="btn-check" name="options-outlined" id={brand.id} key={brand.id} autoComplete="off"/>
                  <label className="btn btn-light" id="ThienPT" style={{cursor:"pointer"}} onClick={() => setBrandSelect(brand.id)} htmlFor={brand.id}>{brand.nameBrands}</label> 
                       cursor: pointer;
                    </>
                  ))}
                </div> */}
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>Quantity product</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <div className="input-group mb-3" style={{ maxWidth: '200px' }}>
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={decreCount}>−</button>
                        </div>
                        <input style={{ minWidth: '70px', width: '70px', backgroundColor: 'white', borderColor: '#007BFF' }}
                          type="button" value={count} onChange={(event) => setCount(event.target.value)} min={1} />
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={increCount}>+</button>
                        </div>
                      </div>
                    </div>
                    {/* <div>Inventory of product: {productDetail.quantity}</div> */}
                  </div>
                </div>
                <div className="">
                  <h4>Price: ${new Intl.NumberFormat().format(productDetail.priceProduct)}</h4>
                  <div className="mt-2">
                    <button className="btn btn-dark" style={{ width: "150px" }} onClick={() => handleAddToCart()}>Add to cart</button>
                  </div>
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