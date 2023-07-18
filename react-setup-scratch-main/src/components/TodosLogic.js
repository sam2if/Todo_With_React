import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
    const todos = [
        {
            id: 1,
            title: 'setup development environment',
            completed: false
        },
        {
            id: 2,
            title: 'develop websites and add content',
            completed: false
        },
        {
            id: 3,
            title: 'deploy to live server',
            completed: false
        }
    ]
    return (
      <ul>
        <InputTodo />
        < TodosList items = {todos} />
      </ul>
    )
  }
  export default TodosLogic;
  