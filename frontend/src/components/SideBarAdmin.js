import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarAdmin = () => {

    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    const showPath = () => {
        if (path === "/admin/events") {
            return (
                <Menu>
                <Menu.Item className="focus"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu> 
            )
        } else if (path === "/admin/reservations") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/admin/maintenance") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/admin/payments") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/admin/residents") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        } else if (path === "/admin/messages") {
            return (
                <Menu>
                <Menu.Item className="tab"><Link to="/admin/events">Events</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/payments">Payments</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/admin/residents">Residents</Link></Menu.Item>
                <Menu.Item className="focus"><Link to="/admin/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                </Menu>
            )
        }
    }

    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
                <text className="center-text">Admin</text>
            </div>

            {showPath()}



        </div>
    )

}

export default SideBarAdmin;