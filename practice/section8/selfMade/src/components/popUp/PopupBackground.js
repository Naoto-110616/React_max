import styles from "./PopupBackground.module.css";

const PopupBackground = (props) => {
	return (
		<div
			className={`${styles[`popup-background`]}`}
			onClick={props.clickClosePopup}
		></div>
	);
};
export default PopupBackground;
