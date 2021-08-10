import './NewUser.module.css';
import UserForm from '../UserForm/UserForm';

const NewUser = (props) => {

	return (
			<div>
				<UserForm>props.children</UserForm>
			</div>
		)

};

export default NewUser;