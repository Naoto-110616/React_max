import styles from "./InputUserList.module.css";

const InputUserColumns = (props) => {
	return (
		<>
			<div className={`${styles[`input-user__wrap`]}`}>
				<h2>User Name</h2>
				<input type="text" onChange={props.addUserName}></input>
			</div>
			<div className={`${styles[`input-user__wrap`]}`}>
				<h2>Age(Years)</h2>
				<input type="number" onChange={props.addUserAge}></input>
			</div>
		</>
	);
};

export default InputUserColumns;
