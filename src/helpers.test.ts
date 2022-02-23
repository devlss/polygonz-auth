import {check} from './helpers';

describe('Test helper check function', () => {
	let errorCollector: {[key: string]: string} = {};
	let errorResult;
	let field;

	afterEach(() => (errorCollector = {}));

	describe('Test email', () => {
		const KEY = 'email';


		test('Is valid email does not produce error', () => {
			field = 'email@example.com';
			errorResult = {};

			check(field, KEY, errorCollector).isNotEmpty().isEmail();
			expect(errorCollector).toEqual(errorResult);
		});

		test('Is invalid email produce error', () => {
			field = 'email';
			errorResult = {[KEY]: 'Invalid email address'};

			check(field, KEY, errorCollector).isNotEmpty().isEmail();
			expect(errorCollector).toEqual(errorResult);
		});

		test('Is empty email produce error', () => {
			field = '';
			errorResult = {[KEY]: 'Field is required'};

			check(field, KEY, errorCollector).isNotEmpty().isEmail();
			expect(errorCollector).toEqual(errorResult);
		});
	});
	describe('Test password', () => {
		const KEY = 'password';

		test('Is fitted password does not produce error', () => {
			field = '123456';
			errorResult = {};

			check(field, KEY, errorCollector).isSized(3, 6);
			expect(errorCollector).toEqual(errorResult);
		});

		test('Is fitted password produce error', () => {
			field = '123456';
			errorResult = {[KEY]: 'Length should be <= 5'};

			check(field, KEY, errorCollector).isSized(3, 5);
			expect(errorCollector).toEqual(errorResult);
		});

	});
});
