import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarAdmin = ({user, setUser}) => {

    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    const onclick = () => {
        console.log(user);
        setUser(undefined);
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = '/CPMS_war_exploded/logout';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("LOGGED OUT!")
            
                } else if (response.status === 408) {
                    alert("SOMETHING WENT WRONG!")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
                </Menu>
            )
        }
    }

    // To avoid TypeError: Cannot read property 'name' of undefined
    const nameForDisplay = () => {
        if (typeof user !== 'undefined') {
            return user.name;
        } else {
            return "";
        }
    }

    return (
        <div>
            <div className="avatar-div">
                <Avatar className="center-avatar" size={100} icon={<UserOutlined />} />
            </div>
                <text className="center-text">Admin: {nameForDisplay()}</text>
            {showPath()}



        </div>
    )

}

export default SideBarAdmin;