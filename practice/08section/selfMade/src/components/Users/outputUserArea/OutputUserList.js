import styles from "./OutputUserList.module.css";

const OutputUserList = (props) => {
	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	return (
		<li className={`${styles[`outputArea-list`]}`} onClick={deleteHandler}>
			{props.children}
		</li>
	);
};

export default OutputUserList;
