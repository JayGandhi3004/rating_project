import axios from "axios";
import { BASE_URL, DELETE_URL, GET_URL, POST_URL } from "../../constant";

// get
export const getUser = () => {
    return axios.get(BASE_URL + GET_URL).then((res) => {
        // console.log(res);

        const data = res.data;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
}


// post 
export const postUser = (action) => {
    console.log(action, "action");
    return axios.post(BASE_URL + POST_URL, action.payload).then((res) => {

        console.log(res);
        const data = res.data;
        console.log(data);
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};

// delete 
export const deleteUser = (action) => {
    console.log(action, "action");
    return axios.delete(BASE_URL + DELETE_URL + action.payload).then((res) => {

        const data = action.payload;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};
