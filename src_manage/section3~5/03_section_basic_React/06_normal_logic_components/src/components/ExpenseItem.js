import "./ExpenseItem.css";

function ExpenseItem(props) {
	const month = props.date.toLocaleString(`en-Us`, { month: `long` });
	const day = props.date.toLocaleString(`en-US`, { day: `2-digit` });
	const year = props.date.getFullYear();
	return (
		<div className="expense-item">
			<div>
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			<h2>{props.title}</h2>
			<div className="expense-item__desctiption">
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;