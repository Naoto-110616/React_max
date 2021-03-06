import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
	const [filterYear, setFilteredYear] = useState(`2020`);
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
