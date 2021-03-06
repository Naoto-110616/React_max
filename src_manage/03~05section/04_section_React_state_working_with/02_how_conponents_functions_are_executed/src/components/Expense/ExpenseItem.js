import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	let title = props.title;

	const clickHandler = () => {
		title = `Updated!`;
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
