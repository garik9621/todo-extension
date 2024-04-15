import React, {useEffect} from "react";
import {TodoItem} from "@entities/Todo/ui/TodoItem.tsx";
import {deleteItem, requestItems, updateItem} from "@entities/Todo";
import {AddTodoItem} from "@features/AddTodoItem";
import {Space} from "antd";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "@shared/hooks/store";

const TodoListWrapperStyled = styled.div`
    max-height: 300px;
    overflow-y: auto;
`

export const TodoList: React.FC = () => {
    const todoList = useAppSelector(state => state.todo.items);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(requestItems());
    }, [])

    const onDoneStatusChanged = (id: string, done: boolean) => {
        const targetItem = todoList.find(item => item.id === id);

        dispatch(updateItem({
            ...targetItem,
            done,
        }))
    }

    const onDelete = (id: string) => {
        dispatch(deleteItem(id));
    }

    return (
        <>
            <AddTodoItem />
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