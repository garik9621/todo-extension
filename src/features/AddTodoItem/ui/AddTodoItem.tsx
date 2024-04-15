import {Button, Form, Input, Space} from "antd";
import {FileAddOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {addItem} from "@entities/Todo";

export const AddTodoItem: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    return (
        <>
            <Form
                form={form}
                onFinish={(values) => {
                    dispatch(addItem(values.text)); form.resetFields();
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