import React from "react";
import {ITodoItem} from "@entities/Todo/model/ITodoItem";

export const TodoItem: React.FC<ITodoItem> = ({ label, done, creationDate, finishDate }) => {

    return (
        <>
            { label }
            { done }
            { creationDate }
            { finishDate }
        </>
    )
}