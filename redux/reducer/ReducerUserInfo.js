import { USER_INFORMATION_REQUEST, USER_INFORMATION_REQUEST_SUCCESS, USER_INFORMATION_REQUEST_FAILURE } from '../action/ActionUserInformation';

const initialState = {
    isLoading: false,
    userInfo: {
        'userID': '',
        'userName': '',
        'fullName': ' ',
        'email': '',
        'phone': '',
        'image': ''
    },
    error:''
}

const ReducerTopic = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFORMATION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case USER_INFORMATION_REQUEST_SUCCESS:
                return {
                    isLoading: false,
                    userInfo: action.payload,
                }
        case USER_INFORMATION_REQUEST_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                }            
        default:
            return state
    }
} 
export default ReducerTopic;