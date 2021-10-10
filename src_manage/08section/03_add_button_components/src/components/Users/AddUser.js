import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
	const AddUser = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUser}>
				<label htmlFor="username">UserName</label>
				<input id="username" type="text" />
				<label>Age (Years)</label>
				<input id="age" type="number" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
