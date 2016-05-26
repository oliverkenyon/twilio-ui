/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CallPanel from './CallPanel';
import SmsPanel from './SmsPanel';
import SmsContainer from "./../util/SmsContainer";
import VoiceCaller from "./../util/VoiceCaller";
import WebSocketConnection from "./../util/WebSocketConnection";

class AppProps {

}

class App extends React.Component<AppProps, any> {

    private voiceCaller: VoiceCaller;

    constructor() {
        super();

        let apiURL = "http://" + location.host + ":8001";

        this.voiceCaller = new VoiceCaller(apiURL);
        this.voiceCaller.initialize();
    }

    render() {

        let webSocketURL = "http://" + location.host + ":8002";
        let webSocketConnection = new WebSocketConnection(webSocketURL);
        webSocketConnection.subscribe(new class {
            onData(message) {
                let newLine = message.from + ": " + message.message + "\n";
                $("#sms-conversation").append(newLine);
            }
        });

        webSocketConnection.open();

        return <div>
            <SmsContainer />
            <CallPanel voiceCaller={this.voiceCaller} />
        </div>;
    }
}

export default App;
