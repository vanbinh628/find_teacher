import { SET_USER_NAME, SET_USER_PASSWORD, GET_LIST_TOPIC, GET_USER_INFORMATION } from './action';

const initialState = {
    name: '',
    password: '',
    topic: [],
    userInfor: {
        'userID': '',
        'userName': '',
        'fullName': ' ',
        'email': '',
        'phone': '',
        'image': ''
    },
    topicRefreshing: true,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            console.debug('ooo');
            return { ...state, name: action.payload };
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload };
        case GET_LIST_TOPIC:
            return { ...state, topic: action.payload, topicRefreshing: false };
        case GET_USER_INFORMATION:
            return { ...state, userInfor: action.payload }
        default:
            return state;
    }
}
export default userReducer;