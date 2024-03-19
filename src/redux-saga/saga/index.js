import { all } from "@redux-saga/core/effects";
import { deleteUserSaga, getUserSaga, postUserSaga } from "./root/rootsaga";

export function* rootSaga() {
    yield all([getUserSaga(), postUserSaga(), deleteUserSaga()]);
}