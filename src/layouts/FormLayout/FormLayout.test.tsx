import React from 'react';
import {render, screen} from '@testing-library/react';
import {FormLayout} from '.';

describe('Stub tests for FormLayout module', () => {
	test('Is hello world exists', () => {
		render(<FormLayout />);
		const linkElement = screen.getByText(/HelloWorld!/i);
		expect(linkElement).toBeInTheDocument();
	});
});
