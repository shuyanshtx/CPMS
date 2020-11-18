import React from 'react';
import { Row, Col } from 'antd';
import SideBarAdmin from '../../components/SideBarAdmin';


const MessagesAdmin = ({user, setUser}) => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarAdmin user={user} setUser={setUser}/>

            </Col>
            <Col span={5.5}>
                Here is Messages for Admin
            </Col>
        </Row>
    )

}

export default MessagesAdmin;