import { Button, Form, Input, InputNumber, Spin } from 'antd';
import { useState } from 'react';
import { Navigate, useNavigate, useLocation } from "react-router-dom";

import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import Header from "./Header";


// import 'antd/dist/antd.css';

function FormPost() {
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    // const onSubmit = () => {
    //     setDisabled(true)
    // }

    const onSubmit = async (value) => {
        console.log("Value ====>", value);

        setDisabled(true)
        try {
            let response = await axios.post(
                `YOUR_API`,
                value
            );
            console.log("response ====>", response);
            setDisabled(false)

            console.log("response ====>", response.data);
            // window.open("http://localhost:3000/pdf", "_blank");
            navigate("/pdf", { state: { data: response.data } })
        } catch (error) {
            setDisabled(false)
        }
    }
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );

    return (
        <div>
            <Header />
            <Form
                style={{
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "40px",
                    paddingLeft: "110px"
                }}
                name="userForm"
                colon={false}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Employee Name"
                    name="Employee Name"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Employee Address"
                    name="Employee Address"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Designation"
                    name="Designation"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Compensation"
                    name="Compensation"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Year of bond/contract"
                    name="Year of bond/contract"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Company Name"
                    name="Company Name"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Company Address"
                    name="Company Address"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label="Date of joining"
                    name="Date of joining"
                    rules={[
                        {
                            required: true,
                            message: 'This is required.',
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    {!disabled && <Button htmlType="submit">Submit</Button>}
                    {disabled && <Spin indicator={antIcon} tip="Loading" />}

                </Form.Item>
            </Form>
        </div>
    );
}

export default FormPost;
