import React, {useState} from "react";
import {TodoItem} from "@entities/Todo/ui/TodoItem.tsx";
import {ITodoItem} from "@entities/Todo";

export const TodoList: React.FC = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    const onDoneStatusChanged = (id: string, done: boolean) => {
        setTodoList(todoList.map(item => ({
            ...item,
            ...(item.id === id ? {done} : {})
        })))
    }

    const onDelete = (id: string) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }

    return (
        <>
        {
            todoList.map((item, index) =>
                <TodoItem
                    key={index}
                    id={item.id}
                    label={item.label}
                    done={item.done}
                    creationDate={item.creationDate}
                    onDoneStatusChanged={onDoneStatusChanged}
                    onDelete={onDelete}
                />
            )
        }
        </>
    )
}