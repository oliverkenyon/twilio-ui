/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import CallPanel from './CallPanel';
import SmsPanel from './SmsPanel';
import SmsContainer from "./../util/SmsContainer";
import VoiceCaller from "./../util/VoiceCaller";

class AppProps {

}

class App extends React.Component<AppProps, any> {

    private voiceCaller: VoiceCaller;

    constructor() {
        super();

        let apiURL = "http://" + location.hostname + ":8001";

        this.voiceCaller = new VoiceCaller(apiURL);
        this.voiceCaller.initialize();
    }

    render() {
        return <div>
            <SmsContainer />
            <CallPanel voiceCaller={this.voiceCaller} />
        </div>;
    }
}

export default App;
