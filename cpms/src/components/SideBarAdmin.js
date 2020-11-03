import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


const SideBarAdmin = () => {
    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
                <text className="center-text">Admin</text>
            </div>
            <Menu>
                <Menu.Item className="tab">Events</Menu.Item>
                <Menu.Item className="tab">Reservations</Menu.Item>
                <Menu.Item className="tab">Maintenance</Menu.Item>
                <Menu.Item className="tab">Payments</Menu.Item>
                <Menu.Item className="tab">Residents</Menu.Item>
                <Menu.Item className="tab">Messages</Menu.Item>
            </Menu>
        </div>
    )

}

export default SideBarAdmin;