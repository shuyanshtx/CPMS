import React from 'react';
import { Row, Col } from 'antd';
import SideBarAdmin from '../../components/SideBarAdmin';


const Payments = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarAdmin />

            </Col>
            <Col span={5.5}>
                Here is Payments

        </Col>
        </Row>
    )

}

export default Payments;