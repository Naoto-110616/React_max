import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./InputUser.module.css";

const InputUser = () => {
	return (
		<Card>
			<form action="submit">
				<div className={`${styles[`input-user__area`]}`}>
					<div className={`${styles[`input-user__wrap`]}`}>
						<h2>User Name</h2>
						<input type="text"></input>
					</div>
					<div className={`${styles[`input-user__wrap`]}`}>
						<h2>Age(Years)</h2>
						<input type="number"></input>
					</div>
					<Button>Add User</Button>
				</div>
			</form>
		</Card>
	);
};
export default InputUser;
