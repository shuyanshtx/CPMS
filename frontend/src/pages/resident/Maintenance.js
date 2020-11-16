import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideBarResident from '../../components/SideBarResident';


const MaintenanceResident = () => {
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
                        <Menu.Item className="tab"><Link to="/resident/account">Account</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/bookamenity">Book Amenity</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/reservations">Reservations</Link></Menu.Item>
                        <Menu.Item className="focus"><Link to="/resident/maintenance">Maintenance</Link></Menu.Item>
                        <Menu.Item className="tab"><Link to="/resident/messages">Messages</Link></Menu.Item>
                        <Menu.Item className="signout"><Link to="/">SignOut</Link></Menu.Item>
                    </Menu>
                </div>

            </Col>
            <Col span={5.5}>
                Here is Maintenance for Resident
            </Col>
        </Row>
    )

}

export default MaintenanceResident;