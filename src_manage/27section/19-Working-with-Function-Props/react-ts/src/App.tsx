import Todos from "./components/Todos";
import Todo from "./models/todo";

import "./App.css";
import NewTodo from "./components/NewTodo";

const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

const addTodoHandler = (todoText: string) => {};

function App() {
	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;