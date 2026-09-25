// @ts-nocheck
import reference from './terminalStyleReference.js';

const setMode = Symbol('setMode');
const setForeground = Symbol('setForeground');
const setBackground = Symbol('setBackground');

const styleStrings = [
	reference.reset,
	...Object.values(reference.mode),
	...Object.values(reference.background),
	...Object.values(reference.foreground)
];

function resolveColorFunctionArguments(plane = '', ...args) {
	const code = plane === 'foreground' ? '38' : '48';
	let color = '';
	let text = undefined;

	if (args.length === 1) {
		color = `\x1B[${code};5;${args[0]}m`;
	} else if (args.length === 2) {
		text = args[0];
		color = `\x1B[${code};5;${args[1]}m`;
	} else if (args.length === 3) {
		color = `\x1B[${code};2;${args[0]};${args[1]};${args[2]}m`;
	} else if (args.length === 4) {
		text = args[0];
		color = `\x1B[${code};2;${args[1]};${args[2]};${args[3]}m`;
	}

	return [color, text];
}

class HighIntensityColor {
	#setColorFunc;

	constructor(setColorFunc = () => {}) {
		this.#setColorFunc = setColorFunc;
	}

	black = (text) => this.#setColorFunc('brightBlack', text);
	blue = (text) => this.#setColorFunc('brightBlue', text);
	cyan = (text) => this.#setColorFunc('brightCyan', text);
	gray = (text) => this.#setColorFunc('brightGray', text);
	green = (text) => this.#setColorFunc('brightGreen', text);
	magenta = (text) => this.#setColorFunc('brightMagenta', text);
	red = (text) => this.#setColorFunc('brightRed', text);
	white = (text) => this.#setColorFunc('brightWhite', text);
	yellow = (text) => this.#setColorFunc('brightYellow', text);
}

class Background {
	#setBackgroundFunc;

	intense = new HighIntensityColor((color, text) =>
		this.#setBackgroundFunc(color, text)
	);

	constructor(setBackgroundFunc = () => {}) {
		this.#setBackgroundFunc = setBackgroundFunc;
	}

	black = (text) => this.#setBackgroundFunc('black', text);
	blue = (text) => this.#setBackgroundFunc('blue', text);
	cyan = (text) => this.#setBackgroundFunc('cyan', text);
	gray = (text) => this.#setBackgroundFunc('gray', text);
	green = (text) => this.#setBackgroundFunc('green', text);
	magenta = (text) => this.#setBackgroundFunc('magenta', text);
	red = (text) => this.#setBackgroundFunc('red', text);
	white = (text) => this.#setBackgroundFunc('white', text);
	yellow = (text) => this.#setBackgroundFunc('yellow', text);

	color(...args) {
		const [color, text] = resolveColorFunctionArguments('background', ...args);
		return this.#setBackgroundFunc(color, text);
	}
}

class TextStyler {
	background = new Background((color, text) =>
		this[setBackground](color, text)
	);
	intense = new HighIntensityColor((color, text) =>
		this[setForeground](color, text)
	);

	[setMode](mode, text) {
		const modeCode = reference.mode[mode];

		if (text === undefined) {
			return new TextStylerChain({ mode: modeCode });
		} else {
			return `${modeCode}${text}${reference.reset}`;
		}
	}

	[setForeground](color, text) {
		const colorCode = color[0] === '\x1B' ? color : reference.foreground[color];

		if (text === undefined) {
			return new TextStylerChain({ foreground: colorCode });
		} else {
			return `${colorCode}${text}${reference.reset}`;
		}
	}

	[setBackground](color, text) {
		const colorCode = color[0] === '\x1B' ? color : reference.background[color];

		if (text === undefined) {
			return new TextStylerChain({ background: colorCode });
		} else {
			return `${colorCode}${text}${reference.reset}`;
		}
	}

	blink = (text) => this[setMode]('blink', text);
	bright = (text) => this[setMode]('bright', text);
	dim = (text) => this[setMode]('dim', text);
	doubleUnderscore = (text) => this[setMode]('doubleUnderscore', text);
	hidden = (text) => this[setMode]('hidden', text);
	italic = (text) => this[setMode]('italic', text);
	reverse = (text) => this[setMode]('reverse', text);
	strikethrough = (text) => this[setMode]('strikethrough', text);
	underscore = (text) => this[setMode]('underscore', text);

	black = (text) => this[setForeground]('black', text);
	blue = (text) => this[setForeground]('blue', text);
	cyan = (text) => this[setForeground]('cyan', text);
	gray = (text) => this[setForeground]('gray', text);
	green = (text) => this[setForeground]('green', text);
	magenta = (text) => this[setForeground]('magenta', text);
	red = (text) => this[setForeground]('red', text);
	white = (text) => this[setForeground]('white', text);
	yellow = (text) => this[setForeground]('yellow', text);

	color(...args) {
		const [color, text] = resolveColorFunctionArguments('foreground', ...args);
		return this[setForeground](color, text);
	}

	applyStyle({ text = '', textColor = '', bgColor = '', mode = '' } = {}) {
		let textMode = '';

		if (mode) {
			if (Array.isArray(mode)) {
				textMode = mode.reduce((modes, mode) => {
					return modes + (reference.mode[mode] || '');
				}, '');
			} else {
				textMode = reference.mode[mode] || '';
			}
		}

		return (
			reference.reset +
			(reference.foreground[textColor] || '') +
			(reference.background[bgColor] || '') +
			textMode +
			text +
			reference.reset
		);
	}

	removeStyle(text = '') {
		styleStrings.forEach((styleString) => {
			text = text.replaceAll(styleString, '');
		});
		return text;
	}
}

class TextStylerChain extends TextStyler {
	#foreground = '';
	#background = '';
	#mode = '';

	constructor({ foreground = '', background = '', mode = '' } = {}) {
		super();

		this.#foreground = foreground;
		this.#background = background;
		this.#mode = mode;
	}

	[setMode](mode = '', text = '') {
		this.#mode += reference.mode[mode];
		return text ? this.#returnText(text) : this;
	}

	[setForeground](color = '', text = '') {
		this.#foreground =
			color[0] === '\x1B' ? color : reference.foreground[color];
		return text ? this.#returnText(text) : this;
	}

	[setBackground](color = '', text = '') {
		this.#background =
			color[0] === '\x1B' ? color : reference.background[color];
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

	[setMode](mode = '', text = '') {
		this.#text += reference.mode[mode] + text;
		return this;
	}

	[setForeground](color = '', text = '') {
		const colorCode = color[0] === '\x1B' ? color : reference.foreground[color];
		this.#text += colorCode + text;
		return this;
	}

	[setBackground](color = '', text = '') {
		const colorCode = color[0] === '\x1B' ? color : reference.background[color];
		this.#text += colorCode + text;
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

export { TextStyler, Background, Typer };
