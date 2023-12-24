import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Cart from "../home/Card";
import Card from "../home/Card";
import { getAllProduct, getColorList, getSizeList, getTypeList } from "../../service/ProductService";
import Cards from "../home/Card";
import CartIcon from "../CartIcon";
import { infoAccountByJwtToken } from "../../service/AccountService";

function ListProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [userName, setUserName] = useState("");
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const handleGetUserName = async () => {
    const res = await infoAccountByJwtToken();
    if (res !== undefined) {
      setUserName(res.sub);
    }
  }
  const handleGetColor = async () => {
    setColorList(await getColorList())
  }

  const handleGetType = async () => {
    setTypeList(await getTypeList())
  }

  const handleGetSize = async () => {
    setSizeList(await getSizeList());
  }




  const handleGetList = async () => {
    const res = await getAllProduct(name, price, brand, color, size, type, page, sort);
    if (res.status == 204) {
      setListProduct(undefined);
      setTotalPage(0);
    } else {
      setListProduct(res.data.content);
      setTotalPage(res.data.totalPages);
    }

  }
  const prePage = () => {
    setPage((page) => page - 1);
  }
  console.log(listProduct);

  const nextPage = () => {
    setPage((page) => page + 1);
  }

  // const handleKeyPress =  (event) => {
  //   if(event.key === "Enter"){
  //     event.preventDefault();
  //      handleSetNameSearch();
  //   }
  // }

  // const handleSetNameSearch = () => {
  // const specialCharsRegex = /[]/;
  // if(!specialCharsRegex.test(name)){
  // if(page > 0){
  //   setPage((page) => page = 0)
  // }
  // handleGetList();
  // }else{
  //   setListProduct([]);
  // }
  // }
  const handleSetColorSearch = (value) => {
    setColor(value);
    setPage(0);
  }
  const handleSetSizeSearch = (value) => {
    setSize(value);
    setPage(0);
  }
  const handleSetTypeSearch = (value) => {
    setType(value);
    setPage(0);
  }
  const handleResetFilter = () => {
    setName("");
    setColor("");
    setSize("");
    setType("");
  }

  console.log("total", totalPage);

  useEffect(() => {
    handleGetList();
    handleGetUserName();
    handleGetColor();
    handleGetType();
    handleGetSize();
    window.scrollTo(0, 0)
  }, [price, brand, color, size, type, page, name, sort])
  if (listProduct === null) {
    return null;
  }
  if (colorList === null) {
    return null
  }
  if (typeList === null) {
    return null;
  }
  if (sizeList === null) {
    return null;
  }
  console.log(name);
  console.log(listProduct);
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
              <input className="form-control" id="name" value={name} onChange={(event) => {
                setName(event.target.value)
                setPage(0)
              }}
              />
              {/* onKeyDown={(event) => handleKeyPress(event)} */}
            </div>
            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for color : </label>
              <select className="form-control" id="select" value={color} onChange={(event) => handleSetColorSearch(event.target.value)}>
                <option selected value={""}>Open this select menu</option>
                {colorList != [] && colorList.map((color, index) => (
                  <>
                    <option value={color.nameColor}>{color.nameColor}</option>
                  </>
                ))}
              </select>
            </div>

            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for type : </label>
              <select className="form-control" id="select" value={type} onChange={(event) => handleSetTypeSearch(event.target.value)}>
                <option selected value={""}>Open this select menu</option>
                {typeList != [] && typeList.map((type, index) => (
                  <>
                    <option value={type.nameType}>{type.nameType}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Search for size : </label>
              <select className="form-control" id="select" value={size} onChange={(event) => handleSetSizeSearch(event.target.value)}>
                <option selected value={""}>Open this select menu</option>
                {sizeList != [] && sizeList.map((size, index) => (
                  <>
                    <option value={size.nameSize}>{size.nameSize}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Reset the filter: </label>
              <button className="form-control btn btn-outline-dark" onClick={() => handleResetFilter()}>Reset</button>
            </div>


            <div className="mt-2 mb-2 ml-2">
              <label htmlFor="select">Sort by price: </label>
              <select className="form-control" id="select"  onChange={(event) => setSort(event.target.value)}>
                <option selected value={"asc"}>incrementally</option>
                <option value={"desc"}>tapered</option>
              </select>
            </div>
          </div>



          <div className="row">
            {(listProduct != [] && listProduct != undefined) ?
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
                <h1>Không tìm thấy</h1>
              </div>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="pagination justify-content-center">
            {listProduct != undefined &&
              <nav aria-label="Page navigation example">
                <ul className="pagination" style={{ marginLeft: '40%' }}>
                  <li className="page-item">
                    <button className="page-link text-dark" aria-label="Previous" onClick={() => prePage()} tabIndex={-1} disabled={page + 1 <= 1}>
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