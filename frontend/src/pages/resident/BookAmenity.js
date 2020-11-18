import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";

import SideBarResident from '../../components/SideBarResident';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

import '../../index.css'



const BookAmenityResident = ({user, setUser}) => {

    const [startDate, setStartDate] = useState(new Date());

    const Amenityoptions = [
        'Cinema', 'Common Room', 'Gym', 'Spa'
    ];

    const TimeOptions = [
        '09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'
    ]
    const defaultOption = Amenityoptions[0];
    const defaultTimeOption = TimeOptions[0];



    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident user={user} setUser={setUser} />
            </Col>
            <Col span={19}>
                {/* <div className="partTitle">
                    Here is Book Amenity for Resident
                </div> */}
                <Row>
                    <Col span={10}>
                        <div className="pickDate">
                            Date:
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="dropdownA">
                            <Dropdown
                                options={Amenityoptions}
                                // onChange={this._onSelect}
                                value={defaultOption}
                                placeholder="Select an option" />
                        </div>

                    </Col>

                    <Col span={9}>
                        <div className="dropdownB">
                            <Dropdown
                                options={TimeOptions}
                                // onChange={this._onSelect}
                                value={defaultTimeOption}
                                placeholder="Select an option" />
                        </div>
                    </Col>
                </Row>
                <div>
                    <button className="submit">Submit</button>
                </div>



            </Col>
        </Row>

    )

}

export default BookAmenityResident;