import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin";
import { Row, Col, Calendar, Badge } from "antd";
import moment from "moment";

const EventsAdmin = ({user, setUser}) => {
  return (
    <Row>
      <Col span={4.5}>
        <SideBarAdmin user={user} setUser={setUser}/>
      </Col>
      <Col span={25}>
        <div
          style={{
            width: 1600,
            height: 800,
            border: "1px solid #d9d9d9",
            borderRadius: 4,
            margin: 10,
            padding: 5,
          }}
        >
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
      </Col>
    </Row>
  );
};

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'Deadline.' },
        { type: 'success', content: 'Room Reserved.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Deadline.' },
        { type: 'success', content: 'Room Reserved.' },
        { type: 'error', content: 'Maintenance.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'Deadline.' },
        { type: 'success', content: 'Room Reserved.' },
        { type: 'error', content: 'Maintenance.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 2334;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Anual Service Fee</span>
    </div>
  ) : null;
}

export default EventsAdmin;
