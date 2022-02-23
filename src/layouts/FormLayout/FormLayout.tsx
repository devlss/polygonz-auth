import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import type {FormLayoutProps} from './FormLayout.types';

import './FormLayout.scss';

export const FormLayout: FC<FormLayoutProps> = () => {
	return (
		<div className="wrapper with-bg">
			<main className="form-layout">
				<section className="form-layout__form"><Outlet /></section>
			</main>
		</div>
	);
};
