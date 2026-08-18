const onSetMode = Symbol('onSetMode');
const onSetForeground = Symbol('onSetForeground');
const onSetBackground = Symbol('onSetBackground');

class TextStyler {
	[onSetMode](mode, text) {
		if (text === undefined) {
			return new TextStylerChain()[mode]();
		} else {
			return `${reference.mode[mode]}${text}${reference.reset}`;
		}
	}

	[onSetForeground](color, text) {
		if (text === undefined) {
			return new TextStylerChain()[color]();
		} else {
			return `${reference.foreground[color]}${text}${reference.reset}`;
		}
	}

	[onSetBackground](color, text) {
		if (text === undefined) {
			return new TextStylerChain()[
				`bg${color[0].toUpperCase() + color.slice(1)}`
			]();
		} else {
			return `${reference.background[color]}${text}${reference.reset}`;
		}
	}

	blink = (text) => this[onSetMode]('blink', text);
	bright = (text) => this[onSetMode]('bright', text);
	dim = (text) => this[onSetMode]('dim', text);
	hidden = (text) => this[onSetMode]('hidden', text);
	reverse = (text) => this[onSetMode]('reverse', text);
	underscore = (text) => this[onSetMode]('underscore', text);

	black = (text) => this[onSetForeground]('black', text);
	blue = (text) => this[onSetForeground]('blue', text);
	cyan = (text) => this[onSetForeground]('cyan', text);
	gray = (text) => this[onSetForeground]('gray', text);
	green = (text) => this[onSetForeground]('green', text);
	magenta = (text) => this[onSetForeground]('magenta', text);
	red = (text) => this[onSetForeground]('red', text);
	white = (text) => this[onSetForeground]('white', text);
	yellow = (text) => this[onSetForeground]('yellow', text);

	bgBlack = (text) => this[onSetBackground]('black', text);
	bgBlue = (text) => this[onSetBackground]('blue', text);
	bgCyan = (text) => this[onSetBackground]('cyan', text);
	bgGray = (text) => this[onSetBackground]('gray', text);
	bgGreen = (text) => this[onSetBackground]('green', text);
	bgMagenta = (text) => this[onSetBackground]('magenta', text);
	bgRed = (text) => this[onSetBackground]('red', text);
	bgWhite = (text) => this[onSetBackground]('white', text);
	bgYellow = (text) => this[onSetBackground]('yellow', text);
}

class TextStylerChain extends TextStyler {
	#foreground = '';
	#background = '';
	#mode = '';

	constructor() {
		super();
	}

	[onSetMode](mode = '', text = '') {
		this.#mode += reference.mode[mode];
		return text ? this.#returnText(text) : this;
	}

	[onSetForeground](color = '', text = '') {
		this.#foreground = reference.foreground[color];
		return text ? this.#returnText(text) : this;
	}

	[onSetBackground](color = '', text = '') {
		this.#background = reference.background[color];
		return text ? this.#returnText(text) : this;
	}

	#returnText(text = '') {
		return `${this.#mode}${this.#background}${this.#foreground}${text}${reference.reset}`;
	}
}

class Typer extends TextStyler {
	#text = '';

	constructor() {
		super();
	}

	[onSetMode](mode, text = '') {
		this.#text += reference.mode[mode] + text;
		return this;
	}

	[onSetForeground](color, text = '') {
		this.#text += reference.foreground[color] + text;
		return this;
	}

	[onSetBackground](color, text = '') {
		this.#text += reference.background[color] + text;
		return this;
	}

	linebreak() {
		this.#text += '\n';
		return this;
	}

	reset(text = '') {
		this.#text += reference.reset + text;
		return this;
	}

	end() {
		return this.#text + reference.reset;
	}
}

const reference = {
	reset: '\x1b[0m',
	mode: {
		bright: '\x1b[1m',
		dim: '\x1b[2m',
		underscore: '\x1b[4m',
		blink: '\x1b[5m',
		reverse: '\x1b[7m',
		hidden: '\x1b[8m'
	},
	foreground: {
		black: '\x1b[30m',
		red: '\x1b[31m',
		green: '\x1b[32m',
		yellow: '\x1b[33m',
		blue: '\x1b[34m',
		magenta: '\x1b[35m',
		cyan: '\x1b[36m',
		white: '\x1b[37m',
		gray: '\x1b[90m'
	},
	background: {
		black: '\x1b[40m',
		red: '\x1b[41m',
		green: '\x1b[42m',
		yellow: '\x1b[43m',
		blue: '\x1b[44m',
		magenta: '\x1b[45m',
		cyan: '\x1b[46m',
		white: '\x1b[47m',
		gray: '\x1b[100m'
	}
};

const textStyler = new TextStyler();
textStyler.createTyper = () => new Typer();

export default textStyler;
