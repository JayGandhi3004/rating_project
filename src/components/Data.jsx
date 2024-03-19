import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DELETE_PROGRESS, GET_PROGRESS, POST_PROGRESS } from "../redux-saga/user/action/action";
import swal from "sweetalert";

const Data = () => {
    const [reviewdata, setreviewdata] = useState({});
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch({ type: GET_PROGRESS });
    }, []);

    const changedata = (e) => {
        setreviewdata({ ...reviewdata, [e.target.name]: e.target.value });
    };

    const change = (e) => {
        const { name, value } = e.target;

        // Check if value is numerical
        const numericValue = /^\d+$/.test(value) ? value : '';
        const validValue = parseInt(numericValue) <= 5 ? numericValue : '';
        setreviewdata({ ...reviewdata, [name]: validValue });
    };

    const submit = () => {
        if (!reviewdata.title || !reviewdata.rating) {
            swal({
                title: "Oops",
                text: "Please fill in both title and rating.",
                icon: "warning",
            })
            // alert("Please fill in both title and rating.");
            return;
        }
        console.log(reviewdata);
        dispatch({ type: POST_PROGRESS, payload: reviewdata });
    };

    const deletedata = (id) => {
        dispatch({ type: DELETE_PROGRESS, payload: id });
    };

    const reset = () => {
        setreviewdata({
            title: "",
            rating: "",
            description: ""
        })
    }

    return (
        <div className="container">
            <div>
                <div className="m-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
                        Title:
                    </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="title"
                        name="title"
                        value={reviewdata.title}
                        onChange={changedata}
                    />
                </div>

                <div className="m-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
                        Rating:
                    </label>
                    <input
                        required
                        type="number"
                        min={1}
                        max={5}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="user can write 0 to 5 number of rating"
                        name="rating"
                        value={reviewdata.rating}
                        onChange={change}
                    />
                </div>

                <div className="m-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
                        Description:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="description"
                        name="description"
                        value={reviewdata.description}
                        onChange={changedata}
                    />
                </div>

                <button
                    onClick={submit}
                    type="button"
                    class="btn btn-outline-success btn-sm mx-2"
                >
                    Success
                </button>
                <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.user.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td>{val.title}</td>
                                <td>{val.rating}</td>
                                <td>{val.description}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger me-2"
                                        onClick={() => deletedata(val.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Data;
