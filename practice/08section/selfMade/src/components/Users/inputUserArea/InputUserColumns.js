import styles from "./InputUserColumns.module.css";

const InputUserColumns = (props) => {
	return (
		<>
			<div
				className={`${styles[`input-user__wrap`]} ${
					!props.validName ? styles[`isValid`] : ``
				}`}
			>
				<h2>User Name</h2>
				<input
					type="text"
					value={props.enteredName}
					onChange={props.addUserName}
				></input>
			</div>
			<div
				className={`${styles[`input-user__wrap`]} ${
					!props.validAge ? styles[`isValid`] : ``
				}`}
			>
				<h2>Age(Years)</h2>
				<input
					type="number"
					value={props.enteredAge}
					onChange={props.addUserAge}
				></input>
			</div>
		</>
	);
};

export default InputUserColumns;
