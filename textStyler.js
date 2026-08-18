import reference from './terminalStyleReference.js';

const onSetMode = Symbol('onSetMode');
const onSetForeground = Symbol('onSetForeground');
const onSetBackground = Symbol('onSetBackground');

class TextStyler {
	background = new Background();

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

class Background {
	#onSetBackground(color, text) {
		if (text === undefined) {
			return new TextStylerChain()[
				`bg${color[0].toUpperCase() + color.slice(1)}`
			]();
		} else {
			return `${reference.background[color]}${text}${reference.reset}`;
		}
	}

	black = (text) => this.#onSetBackground('black', text);
	blue = (text) => this.#onSetBackground('blue', text);
	cyan = (text) => this.#onSetBackground('cyan', text);
	gray = (text) => this.#onSetBackground('gray', text);
	green = (text) => this.#onSetBackground('green', text);
	magenta = (text) => this.#onSetBackground('magenta', text);
	red = (text) => this.#onSetBackground('red', text);
	white = (text) => this.#onSetBackground('white', text);
	yellow = (text) => this.#onSetBackground('yellow', text);
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

const textStyler = new TextStyler();
textStyler.createTyper = () => new Typer();

export default textStyler;
