import {Navigate} from 'react-router-dom';
import {AuthConsumer} from '../auth/provider';

export const PublicRoute = ({children}: {children: JSX.Element}) => {
	const {authed} = AuthConsumer();

	return authed ? <Navigate to="/" replace /> : children;
};
