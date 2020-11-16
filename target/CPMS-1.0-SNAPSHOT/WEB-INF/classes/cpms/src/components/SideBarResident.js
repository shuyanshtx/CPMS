import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarResident = () => {
    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
            </div>
            <text className="center-text">John Doe</text>
            <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
            </Menu>
        </div>
    )

}

export default SideBarResident;