import { useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Cart from "../home/Card";
import Card from "../home/Card";

function ListProduct() {
    const [list,setList] = useState([1,2,3,4,5,6,7,8]);
    return(
        <>
        <Header />
        <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
          <div className="reponsive-cardThienPT" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3rem', padding: '1rem 3.2rem 1rem 3.2rem' }}>
      {list.map((card) => {
        return(
          <>
          <Card element={card} />
          </>
        )
      })}
      </div>
          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
      </section>
      <Footer />
        </>
    )
}
export default ListProduct;