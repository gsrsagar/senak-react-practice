import {
    DELETE_USER, DELETE_USER_SUCCESS, LOAD_USERS,
    LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, LOAD_USER_BY_ID,
    LOAD_USER_BY_ID_SUCCESS, UPDATE_USER, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS,
} from './actionTypes';



const initialState = {
    users: [],
    error: null,
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOAD_USERS: return {
            ...state,
            loading: action.loading,
            error: null
        }
            break;

        case LOAD_USERS_SUCCESS: return {
            ...state,
            users: action.payload,
            error: null, loading: false
        }

        case UPDATE_USER: return {
            ...state,
            loading: action.loading,
            error: null
        }

        case UPDATE_USER_SUCCESS: return {
            ...state,
            loading: false,
            error: null,
            users:[...state.users.map(x => x.id == action.payload.id ? action.payload : x)]
        }
            break;
        default: return {
            ...state,
        }
    }
}

// 5 - users - state
// [{ id:'',u serId:'',}, {}, {},{},{},{}]