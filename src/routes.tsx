import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, Error } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
]);

export function Routes(): JSX.Element {
	return <RouterProvider router={router} />;
}
