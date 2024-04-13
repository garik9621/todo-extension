import React, {useState} from "react";
import {TodoItem} from "@entities/Todo/ui/TodoItem.tsx";
import {ITodoItem} from "@entities/Todo";
import {AddTodoItem} from "@features/AddTodoItem";
import {Space} from "antd";
import styled from "styled-components";

const TodoListWrapperStyled = styled.div`
    max-height: 300px;
    overflow-y: auto;
`

export const TodoList: React.FC = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    const onAddTodoItem = (text: string) => {
        const newTodoItem: ITodoItem = {
            id: `${Math.floor(Math.random() * 999999)}`,
            label: text,
            done: false,
            creationDate: `${Date.now()}`
        }
        setTodoList([...todoList, newTodoItem]);
    };

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
            <AddTodoItem onAddTodoItem={onAddTodoItem} />
            <TodoListWrapperStyled>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
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
                </Space>
            </TodoListWrapperStyled>
        </>
    )
}