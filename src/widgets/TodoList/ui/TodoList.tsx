import React, {useState} from "react";
import {TodoItem} from "@entities/Todo/ui/TodoItem.tsx";
import {ITodoItem} from "@entities/Todo";

export const TodoList: React.FC = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    return (
        <>
        {
            todoList.map((item, index) =>
                <TodoItem
                    key={index}
                    label={item.label}
                    done={item.done}
                    creationDate={item.creationDate}
                    finishDate={item.finishDate}
                />
            )
        }
        </>
    )
}