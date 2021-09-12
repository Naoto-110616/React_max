import React, { useState } from "react";
import InputUser from "./components/Users/inputUserArea/InputUser";
import OutputUser from "./components/Users/outputUserArea/OutputUser";

const App = () => {
	const enteredUserInfo = [
		{
			name: "max",
			age: 32,
		},
		{
			name: "naoto",
			age: 22,
		},
	];
	return (
		<>
			<InputUser />
			<OutputUser userInfo={enteredUserInfo} />
		</>
	);
};

export default App;
