

import { SEND_SMS_REQUEST, SEND_SMS_SUCCESS, SMS_RECEIVED, ActionFactory } from './../action/Actions';

interface State {
    smsMessageLog: Array<string>;
};

const reducer = (state: State = { smsMessageLog: [] }, action) => {
    switch (action.type) {
        case SEND_SMS_REQUEST:
            return state;
        case SEND_SMS_SUCCESS:
            {
                let newMessage = "You: " + action.message + "\n";
                return { "smsMessageLog": [...state.smsMessageLog, newMessage] };
            }
        case SMS_RECEIVED:
            return { "smsMessageLog": [...state.smsMessageLog, action.message] };
    }
    return state;
};

export default reducer;
