export const actionTodo = (data) => {
	return {
		type: 'todoList/addTodo',
		payload: data,
	};
};

export const actionSearchFilter = (data) => {
	return {
		type: 'filter/searchText',
		payload: data,
	};
};
