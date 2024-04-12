import React from "react";
import {ITodoItem} from "@entities/Todo/model/ITodoItem";
import {Button, Checkbox, Flex, Text} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

interface ITodoItemProps extends ITodoItem {
    onDoneStatusChanged: (id: string, done: boolean) => void,
    onDelete: (id: string) => void,
}

export const TodoItem: React.FC<ITodoItemProps> = ({ id, label, done, onDoneStatusChanged, onDelete}) => {

    return (
        <Flex align="center" justify="space-between">
            <Checkbox checked={done} onChange={() => onDoneStatusChanged(id, !done)}>
                <Text delete={done}>{label}</Text>
            </Checkbox>
            <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(id)} />
        </Flex>
    )
}