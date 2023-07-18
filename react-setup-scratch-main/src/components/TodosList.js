import TodoItem from "./TodoItem";

const TodosList = ({items}) => {
    return (
        <ul>
            {items.map((todo) => (
                <TodoItem key = {todo.id} item = {todo} />
            ))}
        </ul>
    )
}

export default TodosList;