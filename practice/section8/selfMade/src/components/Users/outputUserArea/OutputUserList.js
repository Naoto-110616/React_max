import styles from "./OutputUserList.module.css";

const OutputUserList = (props) => {
	return <li className={`${styles[`outputArea-list`]}`}>{props.children}</li>;
};

export default OutputUserList;
