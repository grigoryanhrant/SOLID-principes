import {useTodos} from "../../hooks/useTodos";
import {TodoItem} from "./TodoItem";

export const TodosPage = () => {
    const todos = useTodos();

    const renderTodos = () => {
        return todos.map(todo => {
            return <TodoItem id={todo.id} title={todo.title}/>
        });
    };

    return (
        <div>
            <h1>My Todos:</h1>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    )
};