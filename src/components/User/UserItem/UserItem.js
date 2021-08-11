import Card from '../../Card/Card';

const UserItem = (props) => {
	return (
			<li>
				<Card className='user-item'>
					{props.id}
					{props.userName}
					{props.age}
				</Card>
			</li>
		)
};

export default UserItem;