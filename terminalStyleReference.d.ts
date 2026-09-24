export type TerminalStyleReference = {
	reset: string;
	mode: {
		blink: string;
		bright: string;
		dim: string;
		hidden: string;
		none: string;
		reverse: string;
		underscore: string;
	};
	foreground: {
		black: string;
		blue: string;
		cyan: string;
		default: string;
		gray: string;
		green: string;
		magenta: string;
		red: string;
		white: string;
		yellow: string;
	};
	background: {
		black: string;
		blue: string;
		cyan: string;
		gray: string;
		green: string;
		magenta: string;
		red: string;
		white: string;
		yellow: string;
		transparent: string;
	};
};

declare const terminalStyleReference: TerminalStyleReference;

export default terminalStyleReference;
