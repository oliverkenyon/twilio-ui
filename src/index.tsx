"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./component/App";
import reducer from "./reducer/Reducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import WebSocketConnection from "./util/WebSocketConnection";
import { ActionFactory } from "./action/Actions";

let store = createStore(reducer);

// TODO: this code being here is not ideal
let webSocketURL = "ws://" + location.hostname + ":8002";
let webSocketConnection = new WebSocketConnection(webSocketURL);
webSocketConnection.subscribe(new class {
    onData(message) {
        let newLine = message.from + ": " + message.message;
        store.dispatch(ActionFactory.smsReceived(newLine));
    }
});

webSocketConnection.open();

$(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
});
