import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AppContainer = () => {
	const [userToken] = useState(localStorage.getItem('wewatch_token'));

	if (userToken !== null) {
		const axiosConfig = {
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		};

		axios
			.post(
				`${import.meta.env.VITE_API_URL}/check_token`,
				{
					token: userToken,
				},
				axiosConfig
			)
			.then((res) => {
				if (res.data.token !== 'Token still valid') {
					localStorage.setItem('wewatch_token', res.data.token);
				}
			});
	}

	return (
		<>
			{/* NavBar */}
			<Box>
				<Outlet />
			</Box>
		</>
	);
};

export default AppContainer;
