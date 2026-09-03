import textStyler, { Typer } from './index.js';

const x = textStyler.blink();

console.log(textStyler.black('Black text'));
console.log(textStyler.blue('Blue text'));
console.log(textStyler.bright('bright text'));
console.log(textStyler.bgBlack('bright text'));
console.log(textStyler.bgBlue('bright text'));
console.log(textStyler.dim('dim text'));
console.log(textStyler.underscore('underscore text'));
console.log(textStyler.bright('---------------------'));
console.log(textStyler.bright().blue('Bright blue text'));
console.log(textStyler.bright().bgBlack().blue('Bright blue text'));
console.log(textStyler.black().underscore().bgBlack('Some text here'));

const typer = new Typer();
typer.bright().blue('THIS IS A TYPER WIRTING').linebreak();
typer
	.bgBlack()
	.gray('text text text text text text text text text text text text')
	.reset()
	.linebreak();
typer
	.bgBlack()
	.gray('text text text text text text text text text text text text')
	.reset()
	.linebreak();
typer.reset('NOw I was reseted');
typer.bgBlue();
typer.dim('Almost doneeeeee');
typer.underscore().blue('Ending now');
console.log(typer.end());

console.log(textStyler.background.blue('VIA .background'));
console.log(textStyler.background.blue().dim().red('VIA .background'));
