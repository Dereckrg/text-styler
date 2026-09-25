const terminalStyleReference = {
	reset: '\x1b[0m',
	mode: {
		none: '',
		blink: '\x1b[5m',
		bright: '\x1b[1m',
		dim: '\x1b[2m',
		doubleUnderscore: '\x1B[21m',
		hidden: '\x1b[8m',
		italic: '\x1B[3m',
		reverse: '\x1b[7m',
		strikethrough: '\x1B[9m',
		underscore: '\x1b[4m'
	},
	foreground: {
		default: '',
		black: '\x1b[30m',
		brightBlack: '\x1b[90m',
		blue: '\x1b[34m',
		brightBlue: '\x1b[94m',
		cyan: '\x1b[36m',
		brightCyan: '\x1b[96m',
		gray: '\x1b[90m',
		brightGray: '\x1b[90m',
		green: '\x1b[32m',
		brightGreen: '\x1b[92m',
		magenta: '\x1b[35m',
		brightMagenta: '\x1b[95m',
		red: '\x1b[31m',
		brightRed: '\x1b[91m',
		white: '\x1b[37m',
		brightWhite: '\x1b[97m',
		yellow: '\x1b[33m',
		brightYellow: '\x1b[93m'
	},
	background: {
		transparent: '',
		black: '\x1b[40m',
		brightBlack: '\x1b[100m',
		blue: '\x1b[44m',
		brightBlue: '\x1b[104m',
		cyan: '\x1b[46m',
		brightCyan: '\x1b[106m',
		gray: '\x1b[100m',
		brightGray: '\x1b[100m',
		green: '\x1b[42m',
		brightGreen: '\x1b[102m',
		magenta: '\x1b[45m',
		brightMagenta: '\x1b[105m',
		red: '\x1b[41m',
		brightRed: '\x1b[101m',
		white: '\x1b[47m',
		brightWhite: '\x1b[107m',
		yellow: '\x1b[43m',
		brightYellow: '\x1b[103m'
	}
};

export default terminalStyleReference;
