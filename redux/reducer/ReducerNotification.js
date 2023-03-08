import { NOTIFICATIONS_REQUEST, NOTIFICATIONS_REQUEST_SUCCESS, NOTIFICATIONS_REQUEST_FAILURE } from '../action/ActionNotification';

const initialState = {
    isLoading: false,
    notifications: [],
    error:''
}

export const ReducerNotification = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATIONS_REQUEST:
            console.log('TOPIC_CLASSES_REQUEST')
            return {
                notifications: [],
                isLoading: true,
            }
        case NOTIFICATIONS_REQUEST_SUCCESS:
            console.log('NOTIFICATIONS_REQUEST_SUCCESS')
                return {
                    notifications: action.payload,
                    isLoading: false,
                }
        case NOTIFICATIONS_REQUEST_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }            
        default:
            return state
    }
} 