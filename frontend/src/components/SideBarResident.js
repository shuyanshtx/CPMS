import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarResident = ({user}) => {

    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    const showPath = () => {
        if (path === "/resident/calendar") {
            return (
                <Menu>
                <Menu.Item className="focus"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/resident/account") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/resident/bookamenity") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/resident/reservations") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/resident/maintenance") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/resident/messages") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        }
    }

    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
            </div>
            <text className="center-text">{user.name}</text>
            {showPath()}
        </div>
    )

}

export default SideBarResident;