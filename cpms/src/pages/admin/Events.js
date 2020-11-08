import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin";
import { Row, Col, Calendar } from "antd";
import moment from "moment";

const EventsAdmin = () => {
  return (
    <Row>
      <Col span={4.5}>
        <SideBarAdmin />
      </Col>
      <Col span={25}>
        <div
          style={{
            width: 1000,
            height: 800,
            border: "1px solid #d9d9d9",
            borderRadius: 4,
            margin: 10,
            padding: 5,
          }}
        >
          <Calendar />
        </div>
      </Col>
    </Row>
  );
};

export default EventsAdmin;
