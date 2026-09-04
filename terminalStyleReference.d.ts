export type TerminalStyleReference = {
	reset: string;
	mode: {
		bright: string;
		dim: string;
		underscore: string;
		blink: string;
		reverse: string;
		hidden: string;
	};
	foreground: {
		black: string;
		red: string;
		green: string;
		yellow: string;
		blue: string;
		magenta: string;
		cyan: string;
		white: string;
		gray: string;
	};
	background: {
		black: string;
		red: string;
		green: string;
		yellow: string;
		blue: string;
		magenta: string;
		cyan: string;
		white: string;
		gray: string;
		transparent: string;
	};
};

declare const terminalStyleReference: TerminalStyleReference;

export default terminalStyleReference;
