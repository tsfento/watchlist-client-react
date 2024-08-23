import { createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/login-form';
import AppContainer from './pages/app-container';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppContainer />,
	},
	{
		path: '/welcome',
		element: <LoginForm />,
	},
]);

export default router;
