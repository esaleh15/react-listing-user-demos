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
			<>
				<UserForm onSaveUserData={saveUserDataHandler}></UserForm>
			</>
		)

};

export default NewUser;