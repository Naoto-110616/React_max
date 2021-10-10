import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	console.log(`ExpenseItem evaluted by React`);
	const clickHandler = () => {
		setTitle(`Updated!`);
		console.log(title);
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<h2>{title}</h2>
			<div className="expense-item__desctiption">
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	);
};

export default ExpenseItem;
