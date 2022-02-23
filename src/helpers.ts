export const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
export const isNotEmpty = (field?: string) => !!field;
export const isLongerThan = (field: string, min?: number) => {
	if (min && min > 0) {
		return field.length >= min;
	}
	return true;
};

export const isShorterThan = (field: string, max?: number) => {
	if (max && max > 0) {
		return field.length <= max;
	}
	return true;
};

export const check = (field: string, key: string, collector: {[key: string]: string}) => {
	const validatorChain = {
		isEmail: () => {
			if (!collector[key] && !isEmail(field)) {
				collector[key] = 'Invalid email address';
			}
			return validatorChain;
		},
		isNotEmpty: () => {
			if (!collector[key] && !isNotEmpty(field)) {
				collector[key] = 'Field is required';
			}
			return validatorChain;
		},
		isSized: (min: number, max?: number) => {
			if (!collector[key] ) {
				if (!isLongerThan(field, min)) {
					collector[key] = `Length should be >= ${min}`;
				} else if (!isShorterThan(field, max)) {
					collector[key] = `Length should be <= ${max}`;
				}
			}
		}
	};
	return validatorChain;
};
