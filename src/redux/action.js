export const actionTodo = (data) => {
	return {
		type: 'todoList/addTodo',
		payload: data,
	};
};
