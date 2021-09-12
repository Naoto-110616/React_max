import Card from "../../UI/Card";
import styles from "./OutputUser.module.css";
import OutputUserList from "./OutputUserList";

const OutputUser = (props) => {
	return (
		<Card>
			<ul className={`${styles[`outputArea`]}`}>
				{props.userInfo.map((user) => (
					<OutputUserList key={user.id} id={user.id}>
						{user.name}
						{user.age}
					</OutputUserList>
				))}
			</ul>
		</Card>
	);
};
export default OutputUser;
