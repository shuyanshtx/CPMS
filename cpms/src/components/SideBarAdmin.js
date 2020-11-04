import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarAdmin = () => {
    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
                <text className="center-text">Admin</text>
            </div>
            <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
            </Menu>



        </div>
    )

}

export default SideBarAdmin;