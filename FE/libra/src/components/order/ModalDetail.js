import { useEffect, useState } from "react"
import { getAllOrderDetail } from "../../service/OrderService";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { Modal } from "react-bootstrap";

function ModalDetail({show,setShow,idOrder}) {
    const [orderDetail,setOrderDetail] = useState([]);
    const getDetailList  = async () => {
        const res = await getAllOrderDetail(infoAccountByJwtToken().sub,idOrder)
        if(res !== undefined){
            setOrderDetail(res.data);
        } else{
            setOrderDetail([]);
        }
    }

    useEffect(() => {
        getDetailList()
    },[show,idOrder])

    if(!orderDetail){
        return null;
    }

    return (
        <Modal
            // backdrop="static"
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header className="logout-modal-header">
                <Modal.Title id="example-modal-sizes-title-lg">
                    Detail order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="table-dark">#</th>
                        <th className="table-dark">Name product</th>
                        <th className="table-dark">Quantity</th>
                        <th className="table-dark">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orderDetail.map((o, index) => {
                            return (
                                <tr key={o.idOrder}>
                                    <td>{index +1}</td>
                                    <td>{o.nameProduct}</td>
                                    <td>{o.quantity}</td>
                                    <td>${new Intl.NumberFormat().format(o.priceProduct)}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDetail;