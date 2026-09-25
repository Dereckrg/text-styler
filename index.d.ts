import terminalStyleReference from './terminalStyleReference';
import { TextStyler, Typer } from './TextStyler';

export type TextColor =
	| 'default'
	| 'black'
	| 'brightBlack'
	| 'blue'
	| 'brightBlue'
	| 'cyan'
	| 'brightCyan'
	| 'gray'
	| 'brightGray'
	| 'green'
	| 'brightGreen'
	| 'magenta'
	| 'brightMagenta'
	| 'red'
	| 'brightRed'
	| 'white'
	| 'brightWhite'
	| 'yellow'
	| 'brightYellow';

export type BackgroundColor =
	| 'transparent'
	| 'black'
	| 'brightBlack'
	| 'blue'
	| 'brightBlue'
	| 'cyan'
	| 'brightCyan'
	| 'gray'
	| 'brightGray'
	| 'green'
	| 'brightGreen'
	| 'magenta'
	| 'brightMagenta'
	| 'red'
	| 'brightRed'
	| 'white'
	| 'brightWhite'
	| 'yellow'
	| 'brightYellow';

export type TextMode =
	| 'blink'
	| 'bright'
	| 'dim'
	| 'doubleUnderscore'
	| 'hidden'
	| 'italic'
	| 'none'
	| 'reverse'
	| 'strikethrough'
	| 'underscore';

export { terminalStyleReference, Typer };

declare const textStyler: TextStyler;

export default textStyler;
