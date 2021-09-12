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
			console.log(updateUsers);
			return updateUsers;
		});
	};
	return (
		<>
			<InputUser onAddUserInfo={addUserListHandler} />
			<OutputUser userInfo={enteredUsersInfo} />
		</>
	);
};

export default App;
