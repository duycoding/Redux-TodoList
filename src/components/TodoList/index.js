import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { actionTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector } from '../../redux/selector';

export default function TodoList() {
	const dispatch = useDispatch();
	const [todoName, setTodoName] = useState();
	const [priority, setPriority] = useState('Medium');
	// Lấy dữ liệu từ kho chung
	// console.log(useSelector(todoListSelector));
	const todoList = useSelector(todoListSelector);

	const handleTodoName = (e) => {
		setTodoName(e.target.value);
	};

	const handleSelectPriority = (e) => {
		console.log(e);
		setPriority(e);
	};

	const handleClick = () => {
		dispatch(
			actionTodo({
				id: uuidv4(),
				name: todoName,
				prioriry: priority,
				completed: false,
			}),
		);

		setTodoName('');
		setPriority('Medium');
	};

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col
				span={24}
				style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{todoList.map((todo) => {
					return (
						<Todo
							key={todo.id}
							name={todo.name}
							prioriry={todo.prioriry}
						/>
					);
				})}
			</Col>
			<Col span={24}>
				<Input.Group
					style={{ display: 'flex' }}
					compact>
					<Input
						value={todoName}
						onChange={handleTodoName}
					/>
					<Select
						defaultValue='Medium'
						onChange={handleSelectPriority}>
						<Select.Option
							value='High'
							label='High'>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option
							value='Medium'
							label='Medium'>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option
							value='Low'
							label='Low'>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button
						type='primary'
						onClick={handleClick}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}

//1:11:32
