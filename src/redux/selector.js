export const todoListSelector = (state) => {
	const toDoSearhFor = state.todoList.filter((todo) => {
		return todo.name.includes(state.filters.search);
	});
	return toDoSearhFor;
};

export const searchTextSelector = (state) => state.filters.search;
