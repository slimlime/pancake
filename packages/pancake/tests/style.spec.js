/***************************************************************************************************************************************************************
 *
 * Ansi escape color codes
 *
 * @file         - pancake/src/logging.js
 * @description  - This function adds colour to a string
 *
 **************************************************************************************************************************************************************/

import { Style } from '../src/logging';

//todo - can we refactor for DRY?
test('undefined string in argument should return empty string', () => {
	expect(Style.black(undefined)).toBe('');
	expect(Style.red(undefined)).toBe('');
	expect(Style.green(undefined)).toBe('');
	expect(Style.yellow(undefined)).toBe('');
	expect(Style.blue(undefined)).toBe('');
	expect(Style.magenta(undefined)).toBe('');
	expect(Style.cyan(undefined)).toBe('');
	expect(Style.white(undefined)).toBe('');
	expect(Style.gray(undefined)).toBe('');
	expect(Style.bold(undefined)).toBe('');
});

test('function should return correct string and colour', () => {
	expect(Style.black('test black')).toBe('\u001B[30mtest black\u001b[39m');
	expect(Style.red('test red')).toBe('\u001B[31mtest red\u001b[39m');
	expect(Style.green('test green')).toBe('\u001B[32mtest green\u001b[39m');
	expect(Style.yellow('test yellow')).toBe('\u001B[33mtest yellow\u001b[39m');
	expect(Style.blue('test blue')).toBe('\u001B[34mtest blue\u001b[39m');
	expect(Style.magenta('test magenta')).toBe('\u001B[35mtest magenta\u001b[39m');
	expect(Style.cyan('test cyan')).toBe('\u001B[36mtest cyan\u001b[39m');
	expect(Style.white('test white')).toBe('\u001B[37mtest white\u001b[39m');
	expect(Style.gray('test gray')).toBe('\u001B[90mtest gray\u001b[39m');
	expect(Style.bold('test bold')).toBe('\u001B[1mtest bold\u001b[22m');
});


test('should be able to combine multiple strings of varying colours', () => {
	const red = Style.red('red text ')
	const greenText = `green text ${ red }green text `
	const green = Style.green(greenText)
	const yellowText = `yellow text ${ green }yellow text`
	expect(Style.yellow(yellowText)).toBe("\u001B[33myellow text \u001B[32mgreen text \u001B[31mred text \u001B[32mgreen text \u001B[33myellow text\u001b[39m")
});
