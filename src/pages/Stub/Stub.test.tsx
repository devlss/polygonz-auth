import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Stub} from '.';

test('renders learn react link', () => {
	render(
		<MemoryRouter>
			<Stub />
		</MemoryRouter>
	);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
