
import { connect } from 'react-redux';
import SmsPanel from './../component/SmsPanel';
import { ActionFactory } from './../action/Actions';

declare var store;

function sendSms(message: string, phoneNumber: string, dispatch: any) {

    let fullUrl = "http://" + location.hostname + ":8001/sms/send";

    let payload = {
        "to": phoneNumber,
        "message": message
    };

    let posting = $.post(fullUrl, JSON.stringify(payload));

    posting.done(function(response) {
        dispatch(ActionFactory.sendSmsSuccess(message));
    });
}


const mapStateToProps = (state) => {
    return {
        messageLog: state.smsMessageLog
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (message: string, phoneNumber: string) => {
            dispatch(ActionFactory.sendSmsRequest(message, phoneNumber));
            sendSms(message, phoneNumber, dispatch);
        }
    };
}

const SmsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
    (SmsPanel)

export default SmsContainer;
