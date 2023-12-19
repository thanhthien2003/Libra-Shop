import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Cart from "../home/Card";
import Card from "../home/Card";
import { getAllProduct } from "../../service/ProductService";
import Cards from "../home/Card";
import CartIcon from "../CartIcon";
import { infoAccountByJwtToken } from "../../service/AccountService";

function ListProduct() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [listProduct, setListProduct] = useState(null);
  // name,price,brand,color,size,type,page,sort
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [totalPage, setTotalPage] = useState(0);

  const [userName,setUserName] = useState("");
  const handleGetUserName = async () => {
      const res = await infoAccountByJwtToken();
      if (res !== undefined) {
          setUserName(res.sub);
      }
  }

  useEffect(() => {
      handleGetUserName()
  },[])


  const handleGetList = async () => {
    const res = await getAllProduct(name, price, brand, color, size, type, page, sort);
    setListProduct(res.data.content);
    setTotalPage(res.data.totalPages);
    
  }
  const prePage = () => {
    setPage((page) => page - 1);
}

const nextPage = () => {
    setPage((page) => page + 1);
} 

const handleKeyPress =  (event) => {
  if(event.key === "Enter"){
    event.preventDefault();
     handleSetNameSearch();
  }
}

const handleSetNameSearch = () => {
  const specialCharsRegex = /[!#$%^&*(),?":{}|<>+_]/;
  if(!specialCharsRegex.test(name)){
    if(page > 0){
      setPage((page) => page = 0)
    }
    handleGetList();
  }else{
    setListProduct(null);
  }
}



  useEffect(() => {
    handleGetList();
    // window.scrollTo(0, 0)
  }, [price, brand, color, size, type, page, sort])
  if (listProduct === null) {
    return null;
  }
  console.log(name);
  return (
    <>
      <Header />
     
      
      <section className="section" id="products">
        <div className="products container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-type-search-div mt-2 mb-2">
              <label htmlFor="name">Search by name : </label>
              <input className="form-control" id="name" onChange={(event) => setName(event.target.value)} 
              onKeyDown={(event) => handleKeyPress(event)}/>
            </div>
            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for brand : </label>
              <select className="form-control" id="select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for type : </label>
              <select className="form-control" id="select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for size : </label>
              <select className="form-control" id="select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

          </div>

          

          <div className="row">
          {listProduct !== undefined ? 
            <>
            {
              listProduct.map((card, index) => {
                return (
                  <div key={index} className="col-xxl-3 col-lg-3 col-md-4 col-sm-5 mb-5 mt-3 "
                    style={{ textAlign: "center" }}>
                    <Cards element={card} />
                  </div>
                )
              })
            }
            </>
          : <div>
          <h1>Không có dữ liệu</h1>
      </div>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="pagination justify-content-center">
            {listProduct !== undefined &&
              <nav aria-label="Page navigation example">
                <ul className="pagination" style={{ marginLeft: '40%' }}>
                  <li className="page-item">
                    <button className="page-link text-dark" aria-label="Previous"  onClick={() => prePage()} tabIndex={-1} disabled={page + 1 <= 1}>
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item"><button className="page-link text-dark" >{page + 1}/{totalPage}</button></li>
                  <li className="page-item">
                    <button className="page-link text-dark" aria-label="Next" onClick={() => nextPage()} disabled={page + 1 >= totalPage}>
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default ListProduct;