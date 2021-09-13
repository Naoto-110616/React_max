const AddUser = () => {
	const AddUser = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={AddUser}>
			<label htmlFor="username">UserName</label>
			<input id="username" type="text" />
			<label>Age (Years)</label>
			<input id="age" type="number" />
			<button type="submit">Add User</button>
		</form>
	);
};

export default AddUser;
