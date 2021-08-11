import './NewUser.module.css';
import UserForm from '../UserForm/UserForm';

const NewUser = (props) => {

	const saveUserDataHandler = (enteredUserData) => {
		const userData = {
			...enteredUserData,
			id: Math.random().toString()
		};
		props.onAddUser(userData);
	};


	return (
			<div>
				<UserForm onSaveUserData={saveUserDataHandler}></UserForm>
			</div>
		)

};

export default NewUser;