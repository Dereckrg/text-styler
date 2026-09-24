const terminalStyleReference = {
	reset: '\x1b[0m',
	mode: {
		blink: '\x1b[5m',
		bright: '\x1b[1m',
		dim: '\x1b[2m',
		hidden: '\x1b[8m',
		none: '',
		reverse: '\x1b[7m',
		underscore: '\x1b[4m'
	},
	foreground: {
		black: '\x1b[30m',
		blue: '\x1b[34m',
		cyan: '\x1b[36m',
		default: '',
		gray: '\x1b[90m',
		green: '\x1b[32m',
		magenta: '\x1b[35m',
		red: '\x1b[31m',
		white: '\x1b[37m',
		yellow: '\x1b[33m'
	},
	background: {
		black: '\x1b[40m',
		blue: '\x1b[44m',
		cyan: '\x1b[46m',
		gray: '\x1b[100m',
		green: '\x1b[42m',
		magenta: '\x1b[45m',
		red: '\x1b[41m',
		transparent: '',
		white: '\x1b[47m',
		yellow: '\x1b[43m'
	}
};

export default terminalStyleReference;
