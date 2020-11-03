import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


const SideBarResident = () => {
    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
            </div>
            <text className="center-text">John Doe</text>
            <Menu>
                <Menu.Item className="tab">Calendar</Menu.Item>
                <Menu.Item className="tab">Account</Menu.Item>
                <Menu.Item className="tab">Book Amenity</Menu.Item>
                <Menu.Item className="tab">Reservation</Menu.Item>
                <Menu.Item className="tab">Maintenance</Menu.Item>
                <Menu.Item className="tab">Messages</Menu.Item>
            </Menu>
        </div>
    )

}

export default SideBarResident;