import { type } from '@testing-library/user-event/dist/type';
import {
    DELETE_USER, DELETE_USER_SUCCESS, LOAD_USERS,
    LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, LOAD_USER_BY_ID,
    LOAD_USER_BY_ID_SUCCESS, UPDATE_USER, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS,
} from './actionTypes';

import { fetchuserById, fetchUsersData, updateuserById } from './api.service';

// GET ALL USERS
export const fetchUsers = () => async (dispatch) => {
    try {
        const result = await fetchUsersData();

        if (result?.status && result?.data) {
            dispatch({ type: LOAD_USERS_SUCCESS, payload: result?.data, loading: false })
        }
    } catch (err) {
        dispatch({ type: LOAD_USERS_FAILURE, loading: false, error: err.message })
    }
}

const fetchUserByIdFunc = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER_BY_ID, loading: true });
    try {
        const result = await fetchuserById(id);

        if (result?.status && result?.data) {
            dispatch({ type: LOAD_USER_BY_ID_SUCCESS, payload: result?.data, loading: false })
        }
    } catch (err) {
        dispatch({ type: LOAD_USERS_FAILURE, loading: false, error: err.message })
    }
}

export const updateUserByIdAction = (id, data) => async (dispatch) => {
    dispatch({ type: UPDATE_USER, loading: true });
    try {
        const result = await updateuserById(id, data);
        if (result?.status && result?.data) {
            dispatch({ type: UPDATE_USER_SUCCESS, payload: result?.data, loading: false })
        }
    } catch (err) {
        dispatch({ type: UPDATE_USER_FAILURE, loading: false, error: err.message })
    }
}