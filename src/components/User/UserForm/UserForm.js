import React, { useState, useRef } from 'react';
import Modal from '../../Modal/Modal';
import Wrapper from '../../Helpers/Wrappers/Wrapper';
import classes from './UserForm.module.css';

const UserForm = (props) => {

	const nameInputRef = useRef();
	const ageInputRef = useRef();
	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	// const userNameChangeHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };

	// const ageChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid Input', 
				message: 'Please enter valid name and age'
			});
			return;
		}

		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid Age', 
				message: 'Please enter valid age (> 0)'
			});
			return;
		}
		const userData = {
			userName: enteredName,
			age: enteredUserAge
		};
		props.onSaveUserData(userData);
		nameInputRef.current.value = '';
		ageInputRef.current.value = ''; // Should not do that - states vs refs
		// setEnteredUsername('');
		// setEnteredAge('');
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
							<input id='username' type="text" ref={nameInputRef}/>
						</div>
						<div className={`${classes['user-form__text-input']}`}>
							<label>Age (Years)</label>
							<br/>
							<input id='age' type="number" ref={ageInputRef}/>
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