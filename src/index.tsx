"use strict";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./component/App";
import reducer from "./reducer/Reducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux'

let store = createStore(reducer);

$(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
});
