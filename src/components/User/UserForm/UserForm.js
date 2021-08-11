import classes from './UserForm.module.css';

const UserForm = (props) => {

	return (
			<div>
				<form>
					<div className={`${classes['user-form__container']}`}>
						<div className={`${classes['user-form__text-input']}`}>
							<label>User Name</label>
							<br/>
							<input type="text"/>
						</div>
						<div className={`${classes['user-form__text-input']}`}>
							<label>Age (Years)</label>
							<br/>
							<input type="text"/>
						</div>
						<div className={`${classes['user-form']}`}>
							<button type='button'>Add User</button>
						</div>
					</div>
				</form>
			</div>
		)

};

export default UserForm;