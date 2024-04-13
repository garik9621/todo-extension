import React from "react";
import {Button, Form, Input, Space} from "antd";
import {FileAddOutlined} from "@ant-design/icons";

export const AddTodoItem: React.FC<{ onAddTodoItem: (label: string) => void }> = ({ onAddTodoItem }) => {
    const [form] = Form.useForm();

    return (
        <>
            <Form
                form={form}
                onFinish={(values) => {
                    onAddTodoItem(values.text); form.resetFields();
                }}
                style={{width: '100%'}}
            >
                <Space style={{width: '100%'}} styles={{item: {width: '100%'}}}>
                    <Form.Item
                        label="Todo"
                        name="text"
                        rules={[{ required: true, message: 'Please input todo!' }]}
                    >
                        <Space.Compact style={{width: '100%'}}>
                            <Input />
                            <Button htmlType="submit" type="primary" icon={<FileAddOutlined />}></Button>
                        </Space.Compact>
                    </Form.Item>
                </Space>
            </Form>
        </>
    )
}