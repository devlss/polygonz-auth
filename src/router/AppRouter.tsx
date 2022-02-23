import {Routes, Route, Navigate} from 'react-router-dom';
import {FormLayout} from '../layouts/FormLayout';
import {Login} from '../pages/Login';
import {Registration} from '../pages/Registration';
import {Stub} from '../pages/Stub';
import {ProtectedRoute} from './ProtectedRoute';
import {PublicRoute} from './PublicRoute';

export const AppRouter = () => (
	<Routes>
		<Route element={<FormLayout />}>
			<Route
				path="/login"
				element={
					<PublicRoute>
						<Login />
					</PublicRoute>
				}
			/>
			<Route
				path="/registration"
				element={
					<PublicRoute>
						<Registration />
					</PublicRoute>
				}
			/>
		</Route>
		<Route
			path="/"
			element={
				<ProtectedRoute>
					<Stub />
				</ProtectedRoute>
			}
		/>
		<Route path="*" element={<Navigate to="/" />} />
	</Routes>
);
