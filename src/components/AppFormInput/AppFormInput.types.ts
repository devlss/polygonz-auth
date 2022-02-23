export interface AppFormInputProps {
	name: string;
	type: 'email' | 'password' | 'text';
	label: string;
	[key: string | number | symbol]: unknown;
}
