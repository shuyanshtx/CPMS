import React from 'react';
import SideBarResident from './SideBarResident';
import SideBarAdmin from './SideBarAdmin';
import { Row, Col } from 'antd';

const HomePage = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarAdmin />

            </Col>
            <Col span={5.5}>
                content on the right
            </Col>
        </Row>
    )

}

export default HomePage;
