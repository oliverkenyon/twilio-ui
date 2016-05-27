

export const SEND_SMS_REQUEST = "SEND_SMS_REQUEST";
export const SEND_SMS_SUCCESS = "SEND_SMS_SUCCESS";
export const SMS_RECEIVED = "SMS_RECEIVED";

export class ActionFactory {

    static sendSmsRequest(message: string, number: string) {
        return { type: SEND_SMS_REQUEST, "message": message, "number": number };
    }

    static sendSmsSuccess(message: string) {
        return { type: SEND_SMS_SUCCESS, "message": message };
    }

    static smsReceived(message: string) {
        return { type: SMS_RECEIVED, "message": message };
    }
}
