import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Form, FormikErrors, FormikHelpers} from 'formik';
import {AppFormInput} from '../../components/AppFormInput';
import {check} from '../../helpers';
import {postAuthMessage} from '../../postMessage';
import {AuthConsumer} from '../../auth/provider';
import type {IRegistrationFormFields, RegistrationProps} from './Registration.types';

import './Registration.scss';

const initialValues: IRegistrationFormFields = {first_name: '', second_name: '', login: '', email: '', phone: '', password: ''};

const validate = (values: IRegistrationFormFields) => {
	const errors: FormikErrors<IRegistrationFormFields> = {};
	check(values.login, 'login', errors).isSized(6, 16);
	check(values.first_name, 'first_name', errors).isSized(2, 24);
	check(values.second_name, 'second_name', errors).isSized(2, 24);
	check(values.email, 'email', errors).isNotEmpty().isEmail();
	check(values.phone, 'phone', errors).isSized(12, 12);
	check(values.password, 'password', errors).isNotEmpty().isSized(6, 10);

	return errors;
};

export const Registration: FC<RegistrationProps> = () => {
	const provider = AuthConsumer();

	const onSubmit = async (values: IRegistrationFormFields, {setSubmitting}: FormikHelpers<IRegistrationFormFields>) => {
		const result = await provider.register(values);
		if (result) {
			postAuthMessage();
		}
		setSubmitting(false);
	};

	return (
		<>
			<header className="form-header">
				<h1>Registration</h1>
			</header>
			<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
				{(formik) => {
					return (
						<Form className="form">
							<div className="form__section form__fields">
								<AppFormInput name="login" type="text" label="Login" autofocus required />
								<AppFormInput name="first_name" type="text" label="First name" required />
								<AppFormInput name="second_name" type="text" label="Second name" required />
								<AppFormInput name="email" type="text" autoComplete="email" label="Email" required />
								<AppFormInput name="phone" type="text" autoComplete="phone" label="Phone" required />
								<AppFormInput name="password" type="password" autoComplete="new-password" label="Password" required />
							</div>
							<footer className="form__section form__footer">
								<div className="form__button">
									<button type="submit" disabled={formik.isSubmitting} className="button__submit button">
										<span>Register</span>
									</button>
								</div>
								<div className="form__button">
									<Link to="/login" className="button__link button">
										<span>have account</span>
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
