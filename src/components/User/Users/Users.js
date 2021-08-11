import classes from './Users.module.css';
import UserList from '../UserList/UserList';

const Users = (props) => {
	return (
		<div>
			<UserList users={props.users}/>
		</div>
		);
};

export default Users;