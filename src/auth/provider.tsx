import {createContext, useContext} from 'react';
import {AuthProviderType} from './type';
import {useAuth} from './useAuth';

//@ts-ignorere
const authContext = createContext<AuthProviderType>({});

export const AuthProvider = ({children}: {children: JSX.Element}) => {
	const auth = useAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const AuthConsumer = () => useContext(authContext);
