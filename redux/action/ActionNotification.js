import axios from 'axios';

export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export const NOTIFICATIONS_REQUEST_SUCCESS = 'NOTIFICATIONS_REQUEST_SUCCESS';
export const NOTIFICATIONS_REQUEST_FAILURE = 'NOTIFICATIONS_REQUEST_FAILURE';

const API_NOTIFICATION = 'https://mocki.io/v1/25e103d2-2181-42ce-b649-31eeaea2bb9c';

const fetchNotiRequest = () => {
    return {
        type: NOTIFICATIONS_REQUEST,
    }
}

const fetchNotiRequestSuccess = (notifications) => {
    return {
        type: NOTIFICATIONS_REQUEST_SUCCESS,
        payload: notifications
    }
}

const fetchNotiRequestFailure = (error) => {
    return {
        type: NOTIFICATIONS_REQUEST_FAILURE,
        payload: error
    }
}

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(fetchNotiRequest());
        axios.get(API_NOTIFICATION)
            .then(response => {
                const notis = response.data;
                setTimeout(() => { 
                    dispatch(fetchNotiRequestSuccess(notis)) 
                }, 3000)
            })
            .catch(error => {
                dispatch(fetchNotiRequestFailure(error))
            });
    }
}