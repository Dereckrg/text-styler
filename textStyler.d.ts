class TextStyler {
	background: Background;

	blink(): TextStylerChain;
	blink(text: string): string;
	bright(): TextStylerChain;
	bright(text: string): string;
	dim(): TextStylerChain;
	dim(text: string): string;
	hidden(): TextStylerChain;
	hidden(text: string): string;
	reverse(): TextStylerChain;
	reverse(text: string): string;
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

	bgBlack(): TextStylerChain;
	bgBlack(text: string): string;
	bgBlue(): TextStylerChain;
	bgBlue(text: string): string;
	bgCyan(): TextStylerChain;
	bgCyan(text: string): string;
	bgGray(): TextStylerChain;
	bgGray(text: string): string;
	bgGreen(): TextStylerChain;
	bgGreen(text: string): string;
	bgMagenta(): TextStylerChain;
	bgMagenta(text: string): string;
	bgRed(): TextStylerChain;
	bgRed(text: string): string;
	bgWhite(): TextStylerChain;
	bgWhite(text: string): string;
	bgYellow(): TextStylerChain;
	bgYellow(text: string): string;
}

class TextStylerChain extends TextStyler {}

class Background {
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
}

class Typer extends TextStyler {
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

	bgBlack(): Typer;
	bgBlack(text: string): Typer;
	bgBlue(): Typer;
	bgBlue(text: string): Typer;
	bgCyan(): Typer;
	bgCyan(text: string): Typer;
	bgGray(): Typer;
	bgGray(text: string): Typer;
	bgGreen(): Typer;
	bgGreen(text: string): Typer;
	bgMagenta(): Typer;
	bgMagenta(text: string): Typer;
	bgRed(): Typer;
	bgRed(text: string): Typer;
	bgWhite(): Typer;
	bgWhite(text: string): Typer;
	bgYellow(): Typer;
	bgYellow(text: string): Typer;

	linebreak(): Typer;
	reset(text = ''): Typer;
	end(): string;
}

export { TextStyler, Typer };
