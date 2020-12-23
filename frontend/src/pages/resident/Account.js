import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';

import '../../index.css';

const AccountResident = ({ user, setUser }) => {

    const onFinished = (values) => {
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
                <div className="title">
                    Here is your account information. Change password if you want.
                </div>
                <div className="accountMiddle">
                    <div className="key"> Name: {user.name}</div>
                    <div className="key">Email: {user.email}</div>
                    <div className="key">Address: {user.address}</div>
                    <div className="key">Phone: {user.phone}</div>

                    <Form
                        name="basic"
                        initialValues={{
                        }}
                        onFinish={onFinished}
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
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="default" htmlType="submit">SUBMIT</Button>
                        </Form.Item>

                    </Form>
                </div>
            </Col>
        </Row>
    )

}

export default AccountResident;