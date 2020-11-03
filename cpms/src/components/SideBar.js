import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;


const SideBar = () => {
    return (
        <Menu>
            <Menu.Item>Calendar</Menu.Item>
            <Menu.Item>Account Details</Menu.Item>
            <Menu.Item>Book Amennity</Menu.Item>
            <Menu.Item>Reservation</Menu.Item>
            <Menu.Item>Maintenance</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
        </Menu>
    )

}

export default SideBar;