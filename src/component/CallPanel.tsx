/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import VoiceCaller from '../util/VoiceCaller';

class CallPanelProps {
    public voiceCaller: VoiceCaller;
}

class CallPanel extends React.Component<CallPanelProps, any> {
    render() {
        return <div className="panel panel-default twilio-panel">
            <div className="panel-heading">Call</div>
            <div className="panel-body">
                <div className="input-group" id="call-number-group">
                    <span className="input-group-addon">+44</span>
                    <input type="text" className="form-control" placeholder="Phone number..." id="call-number" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={ () => this.handleCallButtonClicked() }>Call</button>
                    </span>
                </div>
                <div className="input-group" id="call-incoming-group">
                    <input type="text" readOnly="true" id="call-incoming-label" className="form-control" value="Waiting for incoming call..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" disabled="true" onClick={ () => this.handleAnswerButtonClicked() }>Answer</button>
                    </span>
                </div>
            </div>
        </div >;
    }

    handleCallButtonClicked() {
        let number = "+44" + $("#call-number").val();
        this.props.voiceCaller.onCallClicked(number);
    }

    handleAnswerButtonClicked() {
        let hungUp = this.props.voiceCaller.onAnswerClicked();
        if (hungUp) {
            $("#call-answer-button").html("Answer");
            $("#call-answer-button").prop("disabled", true);
        }
        else {
            $("#call-answer-button").prop("disabled", false);
            $("#call-answer-button").html("Hang Up");
        }
    }
}

export default CallPanel;
