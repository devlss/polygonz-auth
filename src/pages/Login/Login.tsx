import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Form, FormikErrors, FormikHelpers} from 'formik';
import {check} from '../../helpers';
import {AppFormInput} from '../../components/AppFormInput';
import {postAuthMessage} from '../../postMessage';
import {AuthConsumer} from '../../auth/provider';
import type {ILoginFormFields, LoginProps} from './Login.types';

import './Login.scss';

const initialValues: ILoginFormFields = {login: '', password: ''};

const validate = (values: ILoginFormFields) => {
	const errors: FormikErrors<ILoginFormFields> = {};
	check(values.login, 'login', errors).isSized(6, 16);
	check(values.password, 'password', errors).isNotEmpty().isSized(6, 10);

	return errors;
};

export const Login: FC<LoginProps> = () => {
	const provider = AuthConsumer();

	const onSubmit = async (values: ILoginFormFields, {setSubmitting}: FormikHelpers<ILoginFormFields>) => {
		const result = await provider.login(values);
		if (result) {
			postAuthMessage();
		}
		setSubmitting(false);
	};

	return (
		<>
			<header className="form-header">
				<h1>Login</h1>
			</header>
			<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
				{(formik) => {
					return (
						<Form className="form">
							<div className="form__section form__fields">
								<AppFormInput name="login" type="text" autoComplete="login" label="Login" autoFocus required />
								<AppFormInput name="password" type="password" autoComplete="current-password" label="Password" required />
							</div>
							<footer className="form__section form__footer">
								<div className="form__button">
									<button type="submit" disabled={formik.isSubmitting} className="button__submit button">
										<span>Login</span>
									</button>
								</div>
								<div className="form__button">
									<Link to="/registration" className="button__link button">
										<span>no account</span>
									</Link>
								</div>
							</footer>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
