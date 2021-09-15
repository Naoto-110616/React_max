import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState(``);
	const [enteredUserAge, setEnteredUserAge] = useState(``);
	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			return;
		}
		if (+enteredUserAge < 1) {
			return;
		}
		props.onAddUser(enteredUserName, enteredUserAge);
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
		<div>
			<ErrorModal title="An error occured!" message="Something went wrong!" />
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
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
		</div>
	);
};

export default AddUser;
