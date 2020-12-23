import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";

import SideBarResident from '../../components/SideBarResident';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import '../../index.css'



const BookAmenityResident = ({ user, setUser }) => {

    const amenityOptions = [
        'Common Room', 'Fitness Center', 'Golf Course', 'Health Center', 'Media Room', 'Party Room', 'Spa', 'Swimming Pool'
    ];

    // times are all hardcoded to simplify operations and eliminate time conversions between formats
    const timeOptions = [
        '00:00:00', '01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00',
        '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00', '11:00:00',
        '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00',
        '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00', '23:00:00'
    ]

    const [date, setDate] = useState(new Date());
    const [amenity, setAmenity] = useState(amenityOptions[0]);
    const [time, setTime] = useState(timeOptions[0]);

    const submit = (value) => {

        let url = '/CPMS_war_exploded/reservation';

        let data = {
            "user_id": user.id,
            "amenity": amenity,
            "status": "unapproved", // two options: unapproved / approved
            "reservation_date": date,
            "reservation_time": time,
            "created_at": new Date().toISOString().slice(0, 19).replace('T', ' ')
        }

        console.log("reservation to add:", data);

        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),

                        })
                            .then((response) => {
                                console.log(response);
                                if (response.status === 200) {
                                    alert("SUCCESS");
                                } else if (response.status === 408) {
                                    alert("SOMETHING WENT WRONG!");
                                }
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident user={user} setUser={setUser} />
            </Col>
            <Col span={19}>
                <div className="title">
                    What amenities do you want to book? Please make reservations.
                </div>
                <div className="accountMiddle">
                    <Row>
                        <Col span={10}>
                            <div className="pickDate">
                                Date:&nbsp;&nbsp;
                                <DatePicker selected={date} onChange={date => setDate(date)} />
                            </div>
                            <div className="dropdownA">
                                <Dropdown
                                    options={amenityOptions}
                                    onChange={e => setAmenity(e.value)}
                                    value={amenity}
                                    placeholder="Select an amenity" />
                            </div>
                        </Col>

                        <Col span={9}>
                            <div className="dropdownB">
                                <Dropdown
                                    options={timeOptions}
                                    onChange={e => setTime(e.value)}
                                    value={time}
                                    placeholder="Select a time" />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <button className="submit" onClick={submit}>SUBMIT</button>
                    </div>
                </div>
            </Col>
        </Row>

    )

}

export default BookAmenityResident;