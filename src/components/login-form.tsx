import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useRef } from 'react';

const LoginForm = () => {
	// const [formData, setFormData] = useState({ username: '', password: '' });

	const formRef = useRef<HTMLFormElement>(null);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	return (
		<form
			ref={formRef}
			onSubmit={(event) => {
				event.preventDefault();

				// setFormData({
				// 	...formData,
				// 	username: usernameRef.current?.value || '',
				// 	password: passwordRef.current?.value || '',
				// });

				const formData = {
					username: usernameRef.current?.value || '',
					password: passwordRef.current?.value || '',
				};
				formRef.current?.reset();

				axios
					.post(`${import.meta.env.VITE_API_URL}/login`, formData)
					.then((res) => {
						// console.log(res.data.token);
						localStorage.setItem('wewatch_token', res.data.token);
					});
			}}
		>
			<FormControl>
				<FormLabel>Username</FormLabel>
				<Input id='username' ref={usernameRef} type='username' />
				<FormLabel>Password</FormLabel>
				<Input id='password' ref={passwordRef} type='password' />
				<Button type='submit'>Login</Button>
			</FormControl>
		</form>
	);
};

export default LoginForm;
