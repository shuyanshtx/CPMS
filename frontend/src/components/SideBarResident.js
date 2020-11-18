import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Form, Button, Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const SideBarResident = ({user, setUser}) => {

    const location = useLocation();
    const path = location.pathname;
    console.log(path);

    const onclick = () => {
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
        if (path === "/resident/calendar") {
            return (
                <Menu>
                <Menu.Item className="focus"><Link to="/resident/calendar">Calendar</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <Menu.Item className="signout"><Link to="/"><Button onClick={onclick}>SignOut</Button></Link></Menu.Item>
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
                <text className="center-text">{nameForDisplay()}</text>
            {showPath()}
        </div>
    )

}

export default SideBarResident;