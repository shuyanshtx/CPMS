import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 10,
    },
};

const LogIn = ({setUser}) => {
    let history = useHistory();

    const onFinish = (values) => {
        const email = values.email;
        const password = values.password;

        const data = { email: email, password: password };

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = '/CPMS_war_exploded/login';

        console.log(JSON.stringify(data));

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then( (response) => {
                if (response.status == 401) {
                    alert("Unauthorized");
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                setUser(
                    {
                        id: data.user_id,
                        name: data.first_name + " " + data.last_name,
                        email: data.email,
                        address: data.unit_num,
                        phone: data.phone,
                        type: data.user_type
                    });
                if (data.user_type === 'resident') {
                    history.push('/resident/calendar');
                } else if (data.user_type === 'admin') {
                    history.push('/admin/events')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <br /><br /><br /><br />
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

// ReactDOM.render(<Login />, mountNode);


export default LogIn;