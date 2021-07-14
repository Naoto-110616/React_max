import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState(``);
	const [enteredAmout, setEnteredAmout] = useState(``);
	const [enteredDate, setEnteredDate] = useState(``);
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: ``,
	// 	enteredAmout: ``,
	// 	enteredDate: ``,
	// });
	const titleChangeHandoler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.terget.value,
		// });
		// setUserInput() = (prevState) => {
		// 	return { ...prevState, enteredTitle: event.terget.value };
		// }
	};
	const amountChangeHandoler = (event) => {
		setEnteredAmout(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmout: event.terget.value,
		// });
	};
	const dateChangeHandoler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.terget.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmout,
			date: new Date(enteredDate),
		};
		console.log(expenseData);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandoler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="text"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandoler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-1-1"
						step="2022-12-31"
						onChange={dateChangeHandoler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
