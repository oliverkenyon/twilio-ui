interface TwilioError {
	message: string;
}

interface TwilioConnection {

}

interface TwilioCall {
	parameters: TwilioCallParameters;
	accept(): void;
}

interface TwilioCallParameters {
	From: string;
}

interface TwilioConnectOptions {
	PhoneNumber: string;
}

interface TwilioDevice {
	setup(token: string, options: any);
	ready(callback: (any) => void);
	error(callback: (errorObject: TwilioError) => void);
	connect(callback: (connection: TwilioConnection) => void);
	connect(options: TwilioConnectOptions);
	incoming(callback: (call: TwilioCall) => void);
	disconnectAll();
}

declare var Twilio: {
	Device: TwilioDevice;
}

declare module "TwilioModule" {
	export default Twilio;
}
