import Footer from "../home/Footer";
import Header from "../home/Header";

function OrderHistory() {
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
                                    <h2>Your history shopping</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">#</th>
                                                <th className="product-thumbnail">Day Order</th>
                                                <th className="product-price">Delivery address</th>
                                                <th className="product-quantity">Phone number</th>
                                                <th className="product-name">Total amount</th>
                                                {/* <th className="product-remove">Remove</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderHistory;