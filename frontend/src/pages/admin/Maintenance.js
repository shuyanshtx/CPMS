import React from 'react';
import { Row, Col } from 'antd';
import SideBarAdmin from '../../components/SideBarAdmin';


const MaintenanceAdmin = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarAdmin />

            </Col>
            <Col span={5.5}>
                Here is Maintenance for Admin
            </Col>
        </Row>
    )

}

export default MaintenanceAdmin;