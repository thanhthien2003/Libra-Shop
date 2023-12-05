import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  
    
    return(
        <>
            <div className="cardsThienPT" style={{ backgroundImage: `url("https://levents.asia/wp-content/uploads/2022/08/z3664112571299_4989917f1fb89290f066e146826a2431-400x500.jpg")` }}>
                  <p className="textThienPT">
                    <ul>
                          <li><Link type='button' to={"/cart"} style={{width: 100 + '%'}} className="btn btn-outline-dark">Thêm vào giỏ hàng</Link></li>
                    </ul>
                  </p>
            </div>
        </>
    )

}
export default Card;

