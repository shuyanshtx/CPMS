import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideBarResident from '../../components/SideBarResident';


const AccountResident = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const urlGet = '/CPMS_war_exploded/resident_account';

    useEffect(() => {
        fetch(urlGet, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setName(data.name);
                setEmail(data.email);
                setAddress(data.unitNum);
                setPhoneNum(data.phoneNum);
            })
        // // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    });

    return (
        <Row>
            <Col span={4.5}>
                <div>
                    <div className="avatar-div">
                        <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
                    </div>
                    <text className="center-text">John Doe</text>
                    <Menu>
                        <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                        <Menu.Item className="focus"><Link to="/resident/account">Account</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                        <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                    </Menu>
                </div>

            </Col>
            <Col span={5.5}>
                <div>
                    <br /><br /><br /><br />
                    Name: { name } <br />
                    Email: { email} <br />
                    Address: { address } <br />
                    Phone: { phoneNum } <br />
                    <Form
                        name="basic"
                        initialValues={{
                     }}
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
                    </Form>
                </div>
            </Col>
        </Row>
    )

}

export default AccountResident;