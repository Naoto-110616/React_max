import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
	const [enteredUserName, setEnteredUserName] = useState(``);
	const [enteredUserAge, setEnteredUserAge] = useState(``);
	const AddUser = (event) => {
		event.preventDefault();
		console.log(enteredUserName, enteredUserAge);
		setEnteredUserName("");
		setEnteredUserAge("");
	};
	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};
	const userAgeChangeHandler = (event) => {
		setEnteredUserAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUser}>
				<label htmlFor="username">UserName</label>
				<input
					id="username"
					type="text"
					value={enteredUserName}
					onChange={userNameChangeHandler}
				/>
				<label>Age (Years)</label>
				<input
					id="age"
					type="number"
					value={enteredUserAge}
					onChange={userAgeChangeHandler}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
