import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { infoAccountByJwtToken } from "../../service/AccountService";
import { createOrder } from "../../service/CartService";


export function Paypal(props) {

    const paypal = useRef()
    const [carts, setCart] = useState({});
    const navigate = useNavigate();

    
    
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Libra Shop",
                                amount: {
                                    currency_code: "USD",
                                    value: props.props1,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setCart({
                        cartDtoList: props.props2
                    });
                    const res = infoAccountByJwtToken();
                    if(res !== null) {

                        await createOrder(props.props2,res.sub,props.props1);
                    }
                    Swal.fire("Successful payment!")
                    props.props3();
                    console.log("order",order);
                },
                onError: (err) => {
                    console.log(err);
                    Swal.fire("Fail payment !", "", "error");
                }
            })
            .render(paypal.current);
    }, []);

    return (
        <>
            <div ref={paypal}
            ></div>
        </>
    )
} 