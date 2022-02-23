import {Navigate} from 'react-router-dom';
import {AuthConsumer} from '../auth/provider';

export const ProtectedRoute = ({children}: {children: JSX.Element}) => {
	const {authed} = AuthConsumer();

	return authed ? children : <Navigate to="/login" replace />;
};
