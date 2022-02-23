import {FC} from 'react';
import {ErrorMessage, Field, GenericFieldHTMLAttributes, useField} from 'formik';
import type {AppFormInputProps} from './AppFormInput.types';

import './AppFormInput.scss';

export const AppFormInput: FC<AppFormInputProps & GenericFieldHTMLAttributes> = ({label, className, type, required, ...props}) => {
	const [field, meta] = useField(props);

	return (
		<div className={`form__field ${className || ''}`}>
			<Field
				id={field.name}
				type={type}
				className={`form__input ${meta.error ? 'form__input_error' : ''} ${meta.value ? 'form__input_filled' : ''}`}
				{...props}
			/>
			<label htmlFor="email" className={`form__label ${required ? 'form__label_required' : ''}`}>
				{label}
			</label>
			<ErrorMessage name={field.name} component="div" className="form__error" />
		</div>
	);
};
