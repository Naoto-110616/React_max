import Card from "../../UI/Card";
import styles from "./OutputUser.module.css";

const OutputUser = (props) => {
	return (
		<Card>
			<div className={`${styles[`outputArea`]}`}>
				<p>
					{props.userInfo[0].name}({props.userInfo[0].age}years old)
				</p>
				<p>
					{props.userInfo[1].name}({props.userInfo[1].age}years old)
				</p>
			</div>
		</Card>
	);
};
export default OutputUser;
