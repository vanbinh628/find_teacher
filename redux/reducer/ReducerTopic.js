import { TOPICS_REQUEST, TOPICS_REQUEST_SUCCESS, TOPICS_REQUEST_FAILURE } from '../action/ActionTopic';

const initialState = {
    isLoading: false,
    topics: [],
    error:''
}

const ReducerTopic = (state = initialState, action) => {
    switch (action.type) {
        case TOPICS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case TOPICS_REQUEST_SUCCESS:
                return {
                    topics: action.payload,
                    isLoading: false,
                }
        case TOPICS_REQUEST_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }            
        default:
            return state
    }
} 
export default ReducerTopic;