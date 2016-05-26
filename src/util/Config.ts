export default class Config {

	private config: any;

	getApiUrl() {
		return "/* @echo UI_API_URL */";
	}

	getWebSocketUrl() {
		return "/* @echo UI_WEBSOCKET_URL */";
	}
}
