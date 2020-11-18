import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideBarResident from '../../components/SideBarResident';


const AccountResident = ({user, setUser}) => {

    const onFinish = (values) => {
        const email = values.email;
        const password = values.password;

        const data = { email: email, password: password };

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = '/CPMS_war_exploded/resident_account';

        console.log(JSON.stringify(data));

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => {
                if (response.status === 200) {
                    alert("SUCCESS!")
            
                } else if (response.status === 408) {
                    alert("SOMETHING WENT WRONG!")
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
        <Row>
            <Col span={4.5}>
                <SideBarResident user={user} setUser={setUser} />
            </Col>
            <Col span={5.5}>
                <div>
                    <br /><br /><br /><br />
                    Name: { user.name } <br />
                    Email: { user.email} <br />
                    Address: { user.address } <br />
                    Phone: { user.phone } <br />
                    <Form
                        name="basic"
                        initialValues={{
                     }}
                     onFinish={onFinish}
                     onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input updated password!',
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Change password!
                    </Button>
                    </Form.Item>

                    </Form>
                </div>
            </Col>
        </Row>
    )

}

export default AccountResident;