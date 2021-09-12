import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Popup.module.css";

const Popup = (props) => {
	return (
		<div className={`${styles[`popup-display`]}`}>
			<Card>
				<div className={`${styles[`popup`]}`}>
					<div className={`${styles[`popup-title`]}`}>
						<h2>Invalid input</h2>
					</div>
					<div>{props.sentence}</div>
					<div className={`${styles[`popup-button`]}`}>
						<Button onClick={props.clickClosePopup}>Okay</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};
export default Popup;
