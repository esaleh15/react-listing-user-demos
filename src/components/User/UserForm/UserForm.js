import React, { useState } from 'react';
import classes from './UserForm.module.css';

const UserForm = (props) => {

	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const userNameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const userData = {
			userName: enteredUsername,
			age: enteredAge
		};
		props.onSaveUserData(userData);
		setEnteredUsername('');
		setEnteredAge('');
	};


	return (
			<div>
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
							<input type="text" value={enteredAge} onChange={ageChangeHandler}/>
						</div>
						<div className={`${classes['user-form']}`}>
							<button type='submit'>Add User</button>
						</div>
					</div>
				</form>
			</div>
		)

};

export default UserForm;