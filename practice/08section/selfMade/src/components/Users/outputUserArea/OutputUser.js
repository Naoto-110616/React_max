import Card from "../../UI/Card";
import styles from "./OutputUser.module.css";
import OutputUserList from "./OutputUserList";

const OutputUser = (props) => {
	let content = (
		<p style={{ textAlign: "center" }}>No user info found. Maybe add one?</p>
	);

	if (props.userInfo.length > 0) {
		content = props.userInfo.map((user) => (
			<OutputUserList key={user.id} id={user.id} onDelete={props.deleteHandler}>
				{user.name} ({user.age} years old)
			</OutputUserList>
		));
	}

	return (
		<Card>
			<ul className={`${styles[`outputArea`]}`}>{content}</ul>
		</Card>
	);
};
export default OutputUser;
