import { call, put } from "redux-saga/effects";
import { DELETE_ERROR, DELETE_SUCCESS, GET_ERROR, GET_SUCCESS, POST_ERROR, POST_SUCCESS } from "../../user/action/action";
import { deleteUser, getUser, postUser } from "../../user/api/api";
import swal from "sweetalert";

// GET 
export function* handleGetUser(action) {
    try {
        const res = yield call(getUser, action);
        // console.log(res,"this is get status");
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_SUCCESS, data });
        } else {
            yield put({ type: GET_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_ERROR, e });
    }
}

// post
export function* handlePostUser(action) {
    try {
        const res = yield call(postUser, action);
        const status = res.status;
        console.log(res, " this is post status");
        const data = res.data;
        if (status === 201) {
            yield put({ type: POST_SUCCESS, data });
            swal({
                title: "Good Job",
                text: "Your data has been added.",
                icon: "success",
            })
        } else {
            yield put({ type: POST_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_ERROR, e });
    }
}

// delete
export function* handleDeleteUser(action) {
    try {
        const res = yield call(deleteUser, action);
        const status = res.status;
        console.log(res, " this is post status");
        const data = res.data;
        if (status === 200) {
            yield put({ type: DELETE_SUCCESS, data });
            swal({
                title: "Deleted",
                text: "Your data has been deleted.",
                icon: "success",
            })
        } else {
            yield put({ type: DELETE_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_ERROR, e });
    }
}
