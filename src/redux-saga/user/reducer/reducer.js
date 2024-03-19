import { DELETE_ERROR, DELETE_PROGRESS, DELETE_SUCCESS, GET_ERROR, GET_PROGRESS, GET_SUCCESS, POST_ERROR, POST_PROGRESS, POST_SUCCESS } from "../action/action";

const initialState = {
    user: [],

    progress: false,
    error: null,
    dataIsLoaded: false,
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        //get
        case GET_PROGRESS: {
            return {
                ...state,
                progress: true,
                error: null,
                dataIsLoaded: false,
            }
        }

        case GET_SUCCESS: {
            return {
                ...state,
                progress: false,
                error: null,
                user: action.data,
                dataIsLoaded: true,
            }
        }

        case GET_ERROR: {
            return {
                ...state,
                progress: false,
                error: action.data,
                dataIsLoaded: false,
            }
        }

        //post
        case POST_PROGRESS: {
            return {
                ...state,
                progress: true,
                error: null,
                dataIsLoaded: false,
            }
        }

        case POST_SUCCESS: {
            return {
                ...state,
                progress: false,
                error: null,
                user: state.user.concat(action.data),
                dataIsLoaded: true,
            }
        }

        case POST_ERROR: {
            return {
                ...state,
                progress: false,
                error: action.data,
                dataIsLoaded: false,
            }
        }

        //delete
        case DELETE_PROGRESS: {
            return {
                ...state,
                progress: true,
                error: null,
                dataIsLoaded: false,
            }
        }

        case DELETE_SUCCESS: {
            return {
                ...state,
                progress: false,
                error: null,
                user: state.user.filter((e) => e.id !== action.data),
                dataIsLoaded: true,
            }
        }

        case DELETE_ERROR: {
            return {
                ...state,
                progress: false,
                error: action.data,
                dataIsLoaded: false,
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default userReducer