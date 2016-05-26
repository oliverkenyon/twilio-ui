

export const SEND_SMS_REQUEST = "SEND_SMS_REQUEST";
export const SEND_SMS_SUCCESS = "SEND_SMS_SUCCESS";

export class ActionFactory {

    // TODO: Try to find a way to make these non-static?
    static sendSmsRequest(message: string, number: string) {
        return { type: SEND_SMS_REQUEST, "message": message, "number": number };
    }

    static sendSmsSuccess(message: string) {
        return { type: SEND_SMS_SUCCESS, "message": message };
    }
}
