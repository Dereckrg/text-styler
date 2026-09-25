import { BackgroundColor, TextColor, TextMode } from './index';

class HighIntensityColor<T> {
	constructor(setColorFunc: (color: string, text?: string) => string | T);

	black(): T;
	black(text: string): string;
	blue(): T;
	blue(text: string): string;
	cyan(): T;
	cyan(text: string): string;
	gray(): T;
	gray(text: string): string;
	green(): T;
	green(text: string): string;
	magenta(): T;
	magenta(text: string): string;
	red(): T;
	red(text: string): string;
	white(): T;
	white(text: string): string;
	yellow(): T;
	yellow(text: string): string;
}

class Background<T> {
	constructor(setBackgroundFunc: (color: string, text?: string) => string | T);

	intense: HighIntensityColor<T>;

	black(): T;
	black(text: string): string;
	blue(): T;
	blue(text: string): string;
	cyan(): T;
	cyan(text: string): string;
	gray(): T;
	gray(text: string): string;
	green(): T;
	green(text: string): string;
	magenta(): T;
	magenta(text: string): string;
	red(): T;
	red(text: string): string;
	white(): T;
	white(text: string): string;
	yellow(): T;
	yellow(text: string): string;

	color(color: number): TextStylerChain;
	color(red: number, green: number, blue: number): TextStylerChain;
	color(text: string, color: number): string;
	color(text: string, red: number, green: number, blue: number): string;
}

class TextStyler {
	background: Background<TextStylerChain>;
	intense: HighIntensityColor<TextStylerChain>;

	blink(): TextStylerChain;
	blink(text: string): string;
	bright(): TextStylerChain;
	bright(text: string): string;
	dim(): TextStylerChain;
	dim(text: string): string;
	doubleUnderscore(): TextStylerChain;
	doubleUnderscore(text: string): string;
	hidden(): TextStylerChain;
	hidden(text: string): string;
	italic(): TextStylerChain;
	italic(text: string): string;
	reverse(): TextStylerChain;
	reverse(text: string): string;
	strikethrough(): TextStylerChain;
	strikethrough(text: string): string;
	underscore(): TextStylerChain;
	underscore(text: string): string;

	black(): TextStylerChain;
	black(text: string): string;
	blue(): TextStylerChain;
	blue(text: string): string;
	cyan(): TextStylerChain;
	cyan(text: string): string;
	gray(): TextStylerChain;
	gray(text: string): string;
	green(): TextStylerChain;
	green(text: string): string;
	magenta(): TextStylerChain;
	magenta(text: string): string;
	red(): TextStylerChain;
	red(text: string): string;
	white(): TextStylerChain;
	white(text: string): string;
	yellow(): TextStylerChain;
	yellow(text: string): string;

	color(color: number): TextStylerChain;
	color(red: number, green: number, blue: number): TextStylerChain;
	color(text: string, color: number): string;
	color(text: string, red: number, green: number, blue: number): string;

	applyStyle(options: {
		text: string;
		textColor?: TextColor;
		bgColor?: BackgroundColor;
		mode?: TextMode | TextMode[];
	}): string;

	removeStyle(text: string): string;
}

class TextStylerChain extends TextStyler {}

class Typer extends TextStyler {
	background: Background<Typer>;
	intense: HighIntensityColor<Typer>;

	blink(): Typer;
	blink(text: string): Typer;
	bright(): Typer;
	bright(text: string): Typer;
	dim(): Typer;
	dim(text: string): Typer;
	hidden(): Typer;
	hidden(text: string): Typer;
	reverse(): Typer;
	reverse(text: string): Typer;
	underscore(): Typer;
	underscore(text: string): Typer;

	black(): Typer;
	black(text: string): Typer;
	blue(): Typer;
	blue(text: string): Typer;
	cyan(): Typer;
	cyan(text: string): Typer;
	gray(): Typer;
	gray(text: string): Typer;
	green(): Typer;
	green(text: string): Typer;
	magenta(): Typer;
	magenta(text: string): Typer;
	red(): Typer;
	red(text: string): Typer;
	white(): Typer;
	white(text: string): Typer;
	yellow(): Typer;
	yellow(text: string): Typer;

	linebreak(): Typer;
	reset(text = ''): Typer;
	end(): string;
}

export { TextStyler, Typer };
