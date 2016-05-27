/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';

class SmsPanelProps {
    public messageLog: Array<string>;
    public onButtonClick: (message: string, phoneNumber: string) => void;
};

class SmsPanel extends React.Component<SmsPanelProps, any> {



    render() {
        return <div className="panel panel-default twilio-panel">
            <div className="panel-heading">SMS Chat</div>
            <div className="panel-body">
                <div className="input-group" id="sms-number-group">
                    <span className="input-group-addon">+44</span>
                    <input type="text" className="form-control" placeholder="Phone number..." id="sms-number" />
                </div>
                <textarea className="form-control" rows="5" id="sms-conversation" placeholder="No messages to show" value={ this.getMessageLog() }></textarea>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Message..." id="sms-message" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" id="sms-send-button" type="button" onClick={ () => this.handleButtonClick() }>Send</button>
                    </span>
                </div>
            </div>
        </div >
    }

		getMessageLog() {
			return this.props.messageLog.join("\n");
		}

    handleButtonClick() {
        let message = $("#sms-message").val();
        let number = "+44" + $("#sms-number").val();
        this.props.onButtonClick(message, number);
    }

    onSendComplete(message: string) {
        let newLine = "You: " + message + "\n";
        $("#sms-conversation").append(newLine);
        $("#sms-message").val("");
    }
}


export default SmsPanel;
