
interface Window {
    WebSocket: any;
    MozWebSocket: any;
}

declare var window: Window;

export default class WebSocketConnection {

    private serverURL: string;
    private websocket: any;
    private subscribers: Array<any>;

    constructor(serverURL: string) {
        this.serverURL = "ws:/" + serverURL + ":4567/websocket";

        this.websocket = null;
        this.subscribers = new Array<any>();
    }

    open() {
        window.WebSocket = window.WebSocket || window.MozWebSocket;

        this.websocket = new WebSocket(this.serverURL);
        this.websocket.onopen = () => {
            console.info("Connection opened to " + this.serverURL);
        }

        this.websocket.onmessage = message => {
            console.info(message.data);
            this.subscribers.forEach(subscriber => {

                subscriber.onData(JSON.parse(message.data));
            });
        }

        this.websocket.onclose = () => {
            console.info("Connection closed to " + this.serverURL);
        }
    }

    subscribe(subscriber) {
        if (this.subscribers.indexOf(subscriber) == -1) {
            this.subscribers.push(subscriber);
        }
    }

    unsubscribe(subscriber) {
        let index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }
}
