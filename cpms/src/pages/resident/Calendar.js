import React from "react";
import { Row, Col, Calendar } from "antd";
import SideBarResident from "../../components/SideBarResident";
import moment from "moment";

// const localizer = momentLocalizer(moment);

const CalendarResident = () => {
  return (
    <Row>
      <Col span={4.5}>
        <SideBarResident />
      </Col>
      <Col span={16}>
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

export default CalendarResident;
