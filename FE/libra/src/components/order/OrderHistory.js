import { useEffect, useState } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { getAllOrder, getAllOrderDetail } from "../../service/OrderService";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { useNavigate } from "react-router-dom";
import { IoInformation } from "react-icons/io5";
import ModalDetail from "./ModalDetail";



function OrderHistory() {
    const [historyOrderList,setHistoryOrderList] = useState([]);
    const navigate = useNavigate();
    const [detailOrder,setDetailOrder] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [idOrderSelect,setIdOrderSelect] = useState(0);
    const handleGetListHistory = async () => {
        const userName = infoAccountByJwtToken();
        if(userName == undefined){
            navigate("/login")
        }
            const res = await getAllOrder(userName.sub);
            if(res.status === 200){
                setHistoryOrderList(res.data);
            } else{
                setHistoryOrderList([]);
            }
    }
    const setIdOrder = async (order) => {
        setIdOrderSelect(order.idOrder)
        setShowModal(true);
    }

    useEffect(() => {
        handleGetListHistory()
    },[idOrderSelect])
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
                            <div className="col-md-12">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th  className="product-thumbnail table-dark">#</th>
                                                <th className="product-thumbnail table-dark">Day Order</th>
                                                <th className="product-price table-dark">Delivery address</th>
                                                <th className="product-quantity table-dark">Phone number</th>
                                                <th className="product-name table-dark">Total amount</th>
                                                <th className="product-remove table-dark">Detail order</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {historyOrderList != [] && historyOrderList.map((order,index) => (
                                                <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{order.dateOrder}</td>
                                                    <td>{order.addressOrder}</td>
                                                    <td>{order.phoneNumber}</td>
                                                    <td>${new Intl.NumberFormat().format(order.totalAmount)}</td>
                                                    <td style={{textAlign:"center"}}>
                                                        <button  class="btn btn-dark" onClick={() => setIdOrder(order)}>
                                                            <IoInformation style={{scale:"1.4"}}/>
                                                        </button></td>
                                                </tr>
                                                </>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDetail 
            show={showModal}
            setShow={setShowModal}
            idOrder={idOrderSelect}
            />
            <Footer />
        </>
    )
}

export default OrderHistory;