import { takeLatest } from "redux-saga/effects";
import { handleDeleteUser, handleGetUser, handlePostUser } from "../manageuser/manageuser";
import { DELETE_PROGRESS, GET_PROGRESS, POST_PROGRESS } from "../../user/action/action";

// GET User data
export function* getUserSaga() {
  yield takeLatest(GET_PROGRESS, handleGetUser);
}

// post User data
export function* postUserSaga() {
  yield takeLatest(POST_PROGRESS, handlePostUser);
}

// delete User data
export function* deleteUserSaga() {
  yield takeLatest(DELETE_PROGRESS, handleDeleteUser);
}
