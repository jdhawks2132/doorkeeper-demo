import {
	Alert,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Divider,
	FormControl,
	FormGroup,
	IconButton,
	Input,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	let errorMessages = [];
	const [errors, setErrors] = useState([]);
	const [showPassword, setShowPassword] = useState(false);
	const loading = false;
	const navigate = useNavigate();

	useEffect(() => {
		emailRef?.current?.focus();
		if (errorMessages.length > 0) {
			setErrors(errorMessages);
			errorMessages = [];
		}
	}, [errorMessages]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);
		if (
			emailRef?.current === undefined ||
			passwordRef?.current === undefined ||
			emailRef?.current.value === '' ||
			passwordRef?.current.value === ''
		) {
			return setErrors(['Please fill in all fields']);
		}
		const payload = {
			email: emailRef?.current?.value,
			password: passwordRef?.current?.value,
		};
		const response = ['ooops something went wrong'];
		console.log(response);
		if (errorMessages.length > 0) {
			navigate('/');
		} else {
			return setErrors(errorMessages);
		}
	};

	const passwordInput = (
		<OutlinedInput
			id='password'
			type={showPassword ? 'text' : 'password'}
			inputRef={passwordRef}
			endAdornment={
				<IconButton
					aria-label='toggle password visibility'
					onClick={() => setShowPassword(!showPassword)}
					onMouseDown={() => setShowPassword(!showPassword)}
					edge='end'
				>
					{showPassword ? <Visibility /> : <VisibilityOff />}
				</IconButton>
			}
		></OutlinedInput>
	);
	return (
		<section>
			<Container>
				<Card>
					<CardContent>
						<Container>
							<Typography>Login</Typography>
							{errors.length > 0 ? (
								<Alert severity='error' aria-live='assertive'>
									{errors.map((error, index) => (
										<p key={index}>{error}</p>
									))}
								</Alert>
							) : (
								<></>
							)}
							<form onSubmit={handleSubmit}>
								<FormGroup row={true} id='email-group' sx={{ marginTop: '1em' }}>
									<FormControl fullWidth>
										<InputLabel required htmlFor='email' id='email-label'>
											Email Address
										</InputLabel>
										<Input id='email' type='email' inputRef={emailRef} />
									</FormControl>
								</FormGroup>
								<FormGroup row={true} id='password-group' sx={{ marginTop: '1em' }}>
									<FormControl fullWidth>
										<InputLabel required htmlFor='password' id='password-label'>
											{passwordInput}
										</InputLabel>
										<Input id='password' type='password' inputRef={passwordRef} />
									</FormControl>
								</FormGroup>
								<FormGroup row={true} id='submit-group' sx={{ marginTop: '1em' }}>
									<FormControl fullWidth>
										<Button disabled={loading} variant='contained' color='primary' type='submit' id='submit-button'>
											Login
										</Button>
									</FormControl>
								</FormGroup>
							</form>
						</Container>
					</CardContent>
					<Divider light={false} />
					<CardActions sx={{ marginTop: '1em', justifyContent: 'center' }} disableSpacing>
						<Box>
							<Typography variant='body2' color='text.secondary' align='center'>
								<Link to='/forgot-password'>Forgot Password?</Link>
							</Typography>
						</Box>
					</CardActions>
				</Card>
			</Container>
		</section>
	);
}

export default Login;
