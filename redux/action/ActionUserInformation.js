import axios from 'axios';

export const USER_INFORMATION_REQUEST = 'USER_INFORMATION_REQUEST';
export const USER_INFORMATION_REQUEST_SUCCESS = 'USER_INFORMATION_REQUEST_SUCCESS';
export const USER_INFORMATION_REQUEST_FAILURE = 'USER_INFORMATION_REQUEST_FAILURE';

const API_USER_INFORMATION_URL = 'https://mocki.io/v1/b646795d-8f72-4cb1-a82d-b97ea555fb2e'

const fetchUserInfoRequest = () => {
    return {
        type: USER_INFORMATION_REQUEST,
    }
}

const fetchUserInfoRequestSuccess = (userInfo) => {
    console.log('USERINFO ' + userInfo.fullName)
    return {
        type: USER_INFORMATION_REQUEST_SUCCESS,
        payload: userInfo
    }
}

const fetchUserInfoRequestFailure = (error) => {
    return {
        type: USER_INFORMATION_REQUEST_FAILURE,
        payload: error
    }
}

export const fetchUserInfo = () => {
    return (dispatch) => {
        dispatch(fetchUserInfoRequest());
        axios.get(API_USER_INFORMATION_URL)
            .then(response => {
                const userInfo = response.data;
                dispatch(fetchUserInfoRequestSuccess(userInfo)) 
            })
            .catch(error => {
                dispatch(fetchUserInfoRequestFailure(error))
            });
    }
}