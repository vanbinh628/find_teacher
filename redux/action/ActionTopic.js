import axios from 'axios';

export const TOPICS_REQUEST = 'TOPICS_REQUEST';
export const TOPICS_REQUEST_SUCCESS = 'TOPICS_REQUEST_SUCCESS';
export const TOPICS_REQUEST_FAILURE = 'TOPICS_REQUEST_FAILURE';

const API_TOPICS = 'https://mocki.io/v1/a18004e3-b52a-48ac-b7fc-88edea8ada7b';

const fetchTopicsRequest = () => {
    return {
        type: TOPICS_REQUEST,
    }
}

const fetchTopicsRequestSuccess = (topics) => {
    return {
        type: TOPICS_REQUEST_SUCCESS,
        payload: topics
    }
}

const fetchTopicsRequestFailure = (error) => {
    return {
        type: TOPICS_REQUEST_FAILURE,
        payload: error
    }
}

export const fetchTopics = () => {
    return (dispatch) => {
        dispatch(fetchTopicsRequest());
        axios.get(API_TOPICS)
            .then(response => {
                const topics = response.data;
                dispatch(fetchTopicsRequestSuccess(topics)) 
            })
            .catch(error => {
                dispatch(fetchTopicsRequestFailure(error))
            });
    }
}