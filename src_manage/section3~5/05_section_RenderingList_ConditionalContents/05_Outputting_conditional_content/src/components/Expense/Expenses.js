import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState(`2020`);
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expenseContent = <p>No expense found.</p>;
	if (filteredExpense.length > 0) {
		expenseContent = filteredExpense.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{expenseContent}
			</Card>
		</div>
	);
};

export default Expenses;
