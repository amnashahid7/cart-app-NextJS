


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "@/features/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.allCart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart -{cart.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {cart?.map((data) => (
                                        <div className="row">
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div
                                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <img
                                                        src={data.img}
                                                        className="w-100"
                                                        alt="shirt"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p>
                                                    <strong>{data.name}</strong>
                                                </p>
                                                <p>
                                                    <strong>{data.color}</strong>
                                                </p>

                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm me-1 mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Remove item"
                                                    onClick={() => dispatch(removeItem(data.id))}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div
                                                    className="d-flex mb-4"
                                                    style={{ maxWidth: "300px" }}
                                                >
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        onClick={() =>
                                                            dispatch(decreaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>

                                                    <div className="form-outline">
                                                        <input
                                                            id="form1"
                                                            min="0"
                                                            name="quantity"
                                                            value={data.quantity}
                                                            type="number"
                                                            className="form-control"
                                                            onChange={() => null}
                                                        />
                                                        <label className="form-label" for="form1">

                                                        </label>
                                                    </div>

                                                    <button
                                                        className="btn btn-primary px-3 ms-2"
                                                        onClick={() =>
                                                            dispatch(increaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </div>

                                                <p className="text-start text-md-center">
                                                    <strong>Product Price {data.price}</strong>
                                                </p>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span>
                                                <strong>{totalPrice}</strong>
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartPage;