import classes from './UserList.module.css';
import UserItem from '../UserItem/UserItem';

const UserList = (props) => {

	let showList = props.users.length > 0

	if (props.users.length === 0) {
		return (<div></div>)
	};


	return (
		<ul className={`${classes['users-list']}`}>
			{props.users.map((user) => (
				<UserItem 
					key={user.id}
					id={user.id}
					userName={user.userName}
					age={user.age}>
				</UserItem>
				))}
		</ul>
		);
};

export default UserList;