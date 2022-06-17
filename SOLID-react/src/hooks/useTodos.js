import {useEffect, useState} from "react";


export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodosFetch() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            setTodos(data);
        };
        getTodosFetch();
    }, []);

    return todos;
};