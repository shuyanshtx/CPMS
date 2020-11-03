import React from 'react';
import SideBar from './SideBar';
import { Row, Col } from 'antd';

const HomePage = () => {
    return (
        <Row>
            <Col span={4}>
                <SideBar />

            </Col>
            <Col span={6}>
                content on the right
            </Col>
        </Row>
    )

}

export default HomePage;
