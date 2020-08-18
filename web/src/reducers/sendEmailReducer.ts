import { ActionTypes, Action, ResponseEmail } from '../actions'

const INITIAL_STATE: ResponseEmail = {  
    mensage: ''
}

export const sendEmailReducer = (state: ResponseEmail, action: Action) => {
    switch (action.type) {
        case ActionTypes.sendEmail:
            return action.payload;
        default:
            return state;
    }
}