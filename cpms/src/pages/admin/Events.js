import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin';
import { Row, Col } from 'antd';



const Events = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarAdmin />

            </Col>
            <Col span={5.5}>
                Here is Events

             </Col>
        </Row>
    )

}

export default Events;
