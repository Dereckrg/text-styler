export type TerminalStyleReference = {
	reset: string;
	mode: {
		blink: string;
		bright: string;
		dim: string;
		doubleUnderscore: string;
		hidden: string;
		italic: string;
		none: string;
		reverse: string;
		strikethrough: string;
		underscore: string;
	};
	foreground: {
		default: string;
		black: string;
		brightBlack: string;
		blue: string;
		brightBlue: string;
		cyan: string;
		brightCyan: string;
		gray: string;
		brightGray: string;
		green: string;
		brightGreen: string;
		magenta: string;
		brightMagenta: string;
		red: string;
		brightRed: string;
		white: string;
		brightWhite: string;
		yellow: string;
		brightYellow: string;
	};
	background: {
		transparent: string;
		black: string;
		brightBlack: string;
		blue: string;
		brightBlue: string;
		cyan: string;
		brightCyan: string;
		gray: string;
		brightGray: string;
		green: string;
		brightGreen: string;
		magenta: string;
		brightMagenta: string;
		red: string;
		brightRed: string;
		white: string;
		brightWhite: string;
		yellow: string;
		brightYellow: string;
	};
};

declare const terminalStyleReference: TerminalStyleReference;

export default terminalStyleReference;
