import React, { useState } from "react";
import InputUser from "./components/Users/inputUserArea/InputUser";
import OutputUser from "./components/Users/outputUserArea/OutputUser";

const App = () => {
	const [enteredUsersInfo, setEnteredUserInfo] = useState([
		{ id: `u1`, name: `Max`, age: 32 },
		{ id: `u2`, name: `Naoto`, age: 22 },
	]);
	const addUserListHandler = (enterdUserName, enteredUserAge) => {
		setEnteredUserInfo((prevUser) => {
			const updateUsers = [...prevUser];
			updateUsers.unshift({
				name: enterdUserName,
				age: enteredUserAge,
				id: Math.random().toString(),
			});
			return updateUsers;
		});
	};
	const enteredUserInfoDeleteHandler = (usersId) => {
		setEnteredUserInfo((prevUser) => {
			const updatedUsers = prevUser.filter((user) => user.id !== usersId);
			return updatedUsers;
		});
	};

	return (
		<>
			<InputUser onAddUserInfo={addUserListHandler} />
			<OutputUser
				userInfo={enteredUsersInfo}
				deleteHandler={enteredUserInfoDeleteHandler}
			/>
		</>
	);
};

export default App;
