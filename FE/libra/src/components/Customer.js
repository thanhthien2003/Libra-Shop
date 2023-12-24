import { useEffect, useState } from "react";
import { getAccountByUserName, infoAccountByJwtToken, updateAccount } from "../service/AccountService";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./home/Header";
import Footer from "./home/Footer";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


function Customer() {
    const [customer, setCustomer] = useState(null);
    const navigate = useNavigate();

    const handleGetAccount = async () => {
        if (infoAccountByJwtToken().sub !== "") {
            const res = await getAccountByUserName(infoAccountByJwtToken().sub);
            if (res !== null) {
                setCustomer(res);
            }
        } else {
            setCustomer({})
            navigate("/login");
        }
    }
    const handleUpdateSubmit = async (account) => {
        const res = await updateAccount(account);
        if(res.status === 200){
            toast("Update success")
        } else{
            toast.error("Update fail")
        }
    }

    useEffect(() => {
        handleGetAccount();
        window.scrollTo(0, 0);

    }, [])

    console.log(customer);
    if (customer === null) {
        return null;
    }
    return (
        <>
            <Header />
            <div class="container rounded bg-white" style={{ marginTop: '160px' }}>
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            class="rounded-circle mt-5" width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span
                                style={{ fontWeight: "bolder" }}>{customer.nameCustomer}</span><span> </span></div>
                    </div>
                    <div class="col-md-9 border-right">
                        <div class="p-3 py-4">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Information</h4>
                            </div>
                            <Formik
                                initialValues={customer}
                                validationSchema={Yup.object(
                                    {
                                        address: Yup.string().required("Can not required"),
                                        phoneNumber: Yup.string().required("Can not required"),
                                        nameCustomer: Yup.string().required("Can not required"),
                                    }
                                )}
                                onSubmit={(values) => {
                                    handleUpdateSubmit(values);
                                }}
                            >
                                <Form>
                                    <div class="row mt-3">

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="name">Your name</label>
                                            <Field type="text"
                                                id="name"
                                                name="nameCustomer"
                                                className="form-control"
                                                placeholder="Enter your nameCustomer"
                                            />
                                            <ErrorMessage name="nameCustomer" component="span"
                                                style={{ color: "red" }} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="phone">Phone number</label>
                                            <Field type="text"
                                                id="phone"
                                                name="phoneNumber"
                                                className="form-control"
                                                placeholder="Enter your phone number"
                                            />
                                            <ErrorMessage name="phoneNumber" component="span"
                                                style={{ color: "red" }} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="address">Địa chỉ</label>
                                            <Field type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"
                                                placeholder="Nhập địa chỉ"
                                            />
                                            <ErrorMessage name="address" component="span" style={{ color: "red" }} />
                                        </div>

                                    </div>
                                    <div class="mt-3 text-center">
                                        <button className="btn btn-outline-dark" type="submit">Update</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Customer;