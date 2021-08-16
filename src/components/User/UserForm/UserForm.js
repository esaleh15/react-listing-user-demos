import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Wrapper from '../../Helpers/Wrappers/Wrapper';
import classes from './UserForm.module.css';

const UserForm = (props) => {

	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const userNameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid Input', 
				message: 'Please enter valid name and age'
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Age', 
				message: 'Please enter valid age (> 0)'
			});
			return;
		}
		const userData = {
			userName: enteredUsername,
			age: enteredAge
		};
		props.onSaveUserData(userData);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const errorHandler = () => {
		setError(null);
	};


	return (
			<Wrapper>
			{error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}></Modal>}
				<form onSubmit={submitHandler}>
					<div className={`${classes['user-form__container']}`}>
						<div className={`${classes['user-form__text-input']}`}>
							<label>User Name</label>
							<br/>
							<input type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
						</div>
						<div className={`${classes['user-form__text-input']}`}>
							<label>Age (Years)</label>
							<br/>
							<input type="number" value={enteredAge} onChange={ageChangeHandler}/>
						</div>
						<div className={`${classes['user-form']}`}>
							<button type='submit'>Add User</button>
						</div>
					</div>
				</form>
			</Wrapper>
		)

};

export default UserForm;