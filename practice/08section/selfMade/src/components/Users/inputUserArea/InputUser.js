import { useState } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InputUserColumns from "./InputUserColumns";
import styles from "./InputUser.module.css";

const InputUser = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const [isValidName, setIsValidName] = useState(true);
	const [isValidAge, setIsValidAge] = useState(true);

	const enteredUserHandler = (event) => {
		event.preventDefault();
		if (userAge.trim() < 0) {
			setIsValidName(false);
			setIsValidAge(false);
			const popupSentence = `Please enter a valid age (>0).`;
			props.popupChange(popupSentence);
			setUserName("");
			setUserAge("");
			return;
		} else if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setIsValidName(false);
			setIsValidAge(false);
			const popupSentence = `Please enter a valid name and age (none-empty values)`;
			props.popupChange(popupSentence);
			setUserName("");
			setUserAge("");
			return;
		}
		props.onAddUserInfo(userName, userAge);
		setUserName("");
		setUserAge("");
	};

	const enteredUserNameHandler = (event) => {
		const enteredUserName = event.target.value;
		setUserName(enteredUserName);
		setIsValidName(true);
	};
	const enteredUserAgeHandler = (event) => {
		const enteredUserAge = event.target.value;
		setUserAge(enteredUserAge);
		setIsValidAge(true);
	};

	return (
		<Card>
			<form onSubmit={enteredUserHandler}>
				<div className={`${styles[`input-user__area`]}`}>
					<InputUserColumns
						addUserName={enteredUserNameHandler}
						addUserAge={enteredUserAgeHandler}
						validName={isValidName}
						validAge={isValidAge}
						enteredName={userName}
						enteredAge={userAge}
					/>
					<Button onClick={enteredUserHandler}>Add User</Button>
				</div>
			</form>
		</Card>
	);
};
export default InputUser;
