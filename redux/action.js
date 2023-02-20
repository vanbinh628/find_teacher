export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const GET_LIST_TOPIC = 'GET_LIST_TOPIC';
export const GET_USER_INFORMATION = 'GET_USER_INFORMATION'

const  API_URL = 'https://mocki.io/v1/a18004e3-b52a-48ac-b7fc-88edea8ada7b';
const API_USER_URL = 'https://mocki.io/v1/b646795d-8f72-4cb1-a82d-b97ea555fb2e'

export const setName = (name) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};
export const setPassword = (password) => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    });
}
export const getListTopic = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'applicaiton/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_LIST_TOPIC,
                    payload: json
                })
            } else {
                console.log('Unable to fetch');
            }
        }

    }  catch(error) {
        console.log(error);
    }
}
export const getUserInformation = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_USER_URL, {
                method: 'GET',
                header: {
                    'Content-Type': 'applicaiton/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_USER_INFORMATION,
                    payload: json
                })
            }
        }
    } catch(error) {
        console.log('Unable to fetch');
    }
}