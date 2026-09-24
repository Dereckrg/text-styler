import terminalStyleReference from './terminalStyleReference';
import { TextStyler, Typer } from './TextStyler';

export type TextColor =
	| 'black'
	| 'blue'
	| 'cyan'
	| 'default'
	| 'gray'
	| 'green'
	| 'magenta'
	| 'red'
	| 'white'
	| 'yellow';

export type BackgroundColor =
	| 'black'
	| 'blue'
	| 'cyan'
	| 'gray'
	| 'green'
	| 'magenta'
	| 'red'
	| 'transparent'
	| 'white'
	| 'yellow';

export type TextMode =
	| 'blink'
	| 'bright'
	| 'dim'
	| 'hidden'
	| 'none'
	| 'reverse'
	| 'underscore';

export { terminalStyleReference, Typer };

declare const textStyler: TextStyler;

export default textStyler;
