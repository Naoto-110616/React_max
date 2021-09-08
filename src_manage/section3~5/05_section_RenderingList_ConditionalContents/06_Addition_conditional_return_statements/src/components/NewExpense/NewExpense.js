import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const saveExpenseDataHnadler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHnadler} />
		</div>
	);
};
export default NewExpense;
