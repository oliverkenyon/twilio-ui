/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CallPanel from './CallPanel';
import SmsPanel from './SmsPanel';
import SmsContainer from "./../util/SmsContainer";
import VoiceCaller from "./../util/VoiceCaller";
import WebSocketConnection from "./../util/WebSocketConnection";
import Config from "./../util/Config";

class AppProps {

}

class App extends React.Component<AppProps, any> {

    private config: Config;
    private voiceCaller: VoiceCaller;

    constructor() {
        super();

        this.config = new Config();
        let apiURL = this.config.getApiUrl();

        this.voiceCaller = new VoiceCaller(apiURL);
        this.voiceCaller.initialize();
    }

    render() {

        let webSocketURL = this.config.getWebSocketUrl();
        let webSocketConnection = new WebSocketConnection(webSocketURL);
        webSocketConnection.subscribe(new class {
            onData(message) {
                let newLine = message.from + ": " + message.message + "\n";
                $("#sms-conversation").append(newLine);
            }
        });

        webSocketConnection.open();

        let apiURL = this.config.getApiUrl();

        return <div>
            <SmsContainer />
            <CallPanel voiceCaller={this.voiceCaller} />
        </div>;
    }
}

export default App;
