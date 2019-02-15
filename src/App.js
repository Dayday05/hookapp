import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, deleteTodo }) {
	return (
		<div
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
			className="todo"
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => deleteTodo(index)}>x</button>
			</div>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [value, setValues] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValues("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={e => setValues(e.target.value)}
				placeholder="Add Todo..."
			/>
		</form>
	);
}

function App() {
	const [todos, setTodos] = useState([
		{
			text: "Learn about React",
			isCompleted: false
		},

		{
			text: "Meet friend",
			isCompleted: false
		},

		{
			text: "Make a really cool app",
			isCompleted: false
		},
		{
			text: "Are you serious ?",
			isCompleted: false
		}
	]);

	const addTodo = text => {
		const NewTodos = [...todos, { text }];
		setTodos(NewTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}
export default App;
