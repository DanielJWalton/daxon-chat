import React from 'react';
import {auth, provider} from '../firebase';
import {Button} from '@material-ui/core';
import styled from 'styled-components';

function Login() {
	const signIn = e => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch(error => alert(error.message));
	};

	return (
		<LoginContainer>
			<LoginInnerContainer className='login__container'>
				<img src='daxon.png' alt='' />
				<div className='login__text'>
					<h1>Sign in to DAXON</h1>
					<p>daxon-clone.web.app</p>
				</div>

				<Button type='submit' onClick={signIn}>
					Sign In With Google
				</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	background-color: #272a31;
	height: 100vh;
	display: grid;
	place-items: center;
`;

const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: #373c40;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}

	> button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #e01b14 !important;
		color: #9ca5b4;
	}
`;
