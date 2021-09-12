import { useState } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InputUserColumns from "./InputUserColumns";
import styles from "./InputUser.module.css";

const InputUser = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const enteredUserHandler = (event) => {
		event.preventDefault();
		props.onAddUserInfo(userName, userAge);
	};

	const enteredUserNameHandler = (event) => {
		const enteredUserName = event.target.value;
		setUserName(enteredUserName);
	};
	const enteredUserAgeHandler = (event) => {
		const enteredUserAge = event.target.value;
		setUserAge(enteredUserAge);
	};

	return (
		<Card>
			<form onSubmit={enteredUserHandler}>
				<div className={`${styles[`input-user__area`]}`}>
					<InputUserColumns
						addUserName={enteredUserNameHandler}
						addUserAge={enteredUserAgeHandler}
					/>
					<Button onClick={enteredUserHandler}>Add User</Button>
				</div>
			</form>
		</Card>
	);
};
export default InputUser;
