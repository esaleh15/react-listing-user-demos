import classes from './UserItem.module.css';

const UserItem = (props) => {
	return (
			<li className={`${classes['user-item__list']}`}>
					<div className={`${classes['user-item__description']}`}>
						<h3>{props.userName} ({props.age} years old)</h3>
					</div>
			</li>
		)
};

export default UserItem;