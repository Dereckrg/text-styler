import textStyler, { Typer } from './index.js';

const x = textStyler.blink();

console.log(textStyler.black('Black text'));
console.log(textStyler.blue('Blue text'));
console.log(textStyler.bright('bright text'));
console.log(textStyler.background.black('bright text'));
console.log(textStyler.background.blue('bright text'));
console.log(textStyler.dim('dim text'));
console.log(textStyler.underscore('underscore text'));
console.log(textStyler.bright('---------------------'));
console.log(textStyler.bright().blue('Bright blue text'));
console.log(textStyler.bright().background.black().blue('Bright blue text'));
console.log(textStyler.black().underscore().background.black('Some text here'));

const typer = new Typer();
typer.bright().blue('THIS IS A TYPER WIRTING').linebreak();
typer.background
	.black()
	.gray('text text text text text text text text text text text text')
	.reset()
	.linebreak();
typer.background
	.black()
	.gray('text text text text text text text text text text text text')
	.reset()
	.linebreak();
typer.reset('NOw I was reseted');
typer.background.blue();
typer.dim('Almost doneeeeee');
typer.underscore().blue('Ending now');
console.log(typer.end());

console.log(textStyler.background.blue('VIA .background'));
console.log(textStyler.background.blue().dim().red('VIA .background'));

const styledText = textStyler.background.blue().dim().red('Style Text');
console.log(styledText);
console.log([styledText]);
console.log(textStyler.removeStyle(styledText));

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text',
		textColor: 'blue',
		bgColor: 'green',
		mode: 'bright'
	})
);

console.log('**************');

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text',
		textColor: 'yellow',
		// bgColor: 'yellow',
		mode: ['bright', 'underscore']
	})
);

console.log(textStyler.italic('Applying style to a text'));
console.log(textStyler.strikethrough('Applying style to a text'));
console.log(textStyler.doubleUnderscore('Applying style to a text'));
console.log('\x1b[41mApplying style to a text\x1b[0m');
console.log('\x1b[101mApplying style to a text\x1b[0m');
console.log(textStyler.background.cyan('Applying style to a text'));
console.log(textStyler.bright().background.black().blue('Bright blue text'));
console.log(textStyler.color('Applying style to a text', 30));
console.log(textStyler.color('Applying style to a text', 30, 192, 78));
console.log(textStyler.color(30).bright('Applying style to a text'));
console.log(textStyler.color(30, 192, 78).bright('Applying style to a text'));
console.log(textStyler.background.color('Applying style to a text', 30));
console.log(
	textStyler.background.color('Applying style to a text', 30, 192, 78)
);
console.log(textStyler.background.color(30).bright('Applying style to a text'));
console.log(
	textStyler.background.color(30, 192, 78).bright('Applying style to a text')
);

console.log(textStyler.intense.blue('Applying style to a text'));
console.log(textStyler.background.red('Applying style to a text'));
console.log(
	textStyler.background.intense.blue().white('Applying style to a text')
);
console.log(textStyler.background.intense.red('Applying style to a text'));
console.log(textStyler.intense.red().underscore('Applying style to a text'));

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text 256 fore ',
		textColor: 127
	})
);

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text 256 back',
		bgColor: 209
	})
);

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text RGB fore',
		textColor: [30, 192, 78]
	})
);

console.log(
	textStyler.applyStyle({
		text: 'Applying style to a text RGB back',
		bgColor: [70, 63, 178]
	})
);
('ABCABCABC');
console.log(
	textStyler.slice(
		'ABC\x1B[100mABC\x1B[100m\x1B[100m\x1B[100mABC\x1B[100m\x1B[100m\x1B[0m',
		0,
		6
	)
);

console.log([
	textStyler.slice(
		'ABC\x1B[100mABC\x1B[100m\x1B[100m\x1B[100mABC\x1B[100m\x1B[100m\x1B[0m',
		0,
		6
	)
]);

console.log(
	textStyler.removeStyle(
		'ABC\x1B[100mABC\x1B[100m\x1B[100m\x1B[100mABC\x1B[100m\x1B[100m\x1B[0m'
	)
);

function colorTest() {
	let sample = 'Standard colors\n';

	for (let i = 0; i <= 7; i++) {
		sample += textStyler.background.color(`   ${i}   `, i);
	}

	sample += '\n\nHigh-intensity colors\n';

	for (let i = 8; i <= 15; i++) {
		sample += textStyler.background.color(`  ${i > 9 ? i : ` ${i}`}   `, i);
	}

	sample += '\n\n216 colors\n';

	for (let i = 16; i <= 231; i++) {
		for (let c = 0; c < 6; c++) {
			sample += textStyler.background.color(`  ${i > 99 ? i : ` ${i}`}   `, i);
			i++;
		}

		sample += '\n';
		i--;
	}

	sample += '\n\Grayscale colors\n';

	for (let i = 232; i <= 255; i++) {
		for (let c = 0; c < 6; c++) {
			sample += textStyler.background.color(`  ${i}   `, i);
			i++;
		}

		sample += '\n';
		i--;
	}

	console.log(sample);
}

// colorTest();

// console.log(' \u2581\u2581\u2581\u2581 ');

// console.log(`\u2595${textStyler.background.red('    ')}\u258f`);

// console.log(' \u2594\u2594\u2594\u2594 ');

// console.log(
// 	`\u2595${textStyler.background.red('\u2594\u2594\u2594\u2594')}\u258f`
// );

// console.log(`\u2595${textStyler.background.red('    ')}\u258f`);

// console.log(
// 	`\u2595${textStyler.background.red('\u2581\u2581\u2581\u2581')}\u258f`
// );
