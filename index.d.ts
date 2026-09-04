import terminalStyleReference from './terminalStyleReference';
import { TextStyler, Typer } from './TextStyler';

export type TextColor =
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'gray';

export type BackgroundColor =
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'gray'
	| 'transparent';

export type TextMode =
	| 'bright'
	| 'dim'
	| 'underscore'
	| 'blink'
	| 'reverse'
	| 'hidden';

	
export {
	terminalStyleReference,
	Typer
};

declare const textStyler: TextStyler = new TextStyler();

export default textStyler;