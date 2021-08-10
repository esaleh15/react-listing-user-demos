import './UserForm.module.css';

const UserForm = (props) => {

	return (
			<div>
				<form>
					<div className='user-form__container'>
						<div className='user-form__text-input'>
							<label>User Name</label>
							<input type="text"/>
						</div>
						<div className='user-form__text-input'>
							<label>Age (Years)</label>
							<input type="text"/>
						</div>
						<div className='user-form__buttons'></div>
						<button type='button'>Add User</button>
					</div>
				</form>
			</div>
		)

};

export default UserForm;