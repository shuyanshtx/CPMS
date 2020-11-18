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

    const [startDate, setStartDate] = useState(new Date());
    const [amenity, setAmenity] = useState('');
    const [time, setTime] = useState({ value: '' });

    const Amenityoptions = [
        'Cinema', 'Common Room', 'Gym', 'Spa'
    ];

    const TimeOptions = [
        ' 09:00:00', ' 10:00:00', ' 11:00:00', ' 12:00:00', '13:00:00', '14:00:00',
        '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00',
        '21:00:00'
    ]
    const defaultOption = Amenityoptions[0];
    const defaultTimeOption = TimeOptions[0];

    const selectAmenity = (v) => {
        setAmenity(v.value);
    }

    const selectTime = (v) => {
        setTime(v);
    }



    // var s = '12-01-2020 00:03:44';
    // const d = moment(s);
    // console.log(d);
    // console.log(typeof (d));

    const submit = (value) => {

        const realTime = startDate.toDateString().concat(time.value);
        console.log(time.value);
        console.log(realTime);

        let url = '/CPMS_war_exploded/reservation';

        let data = {
            "reservation_id": 1,
            "user_id": 1111,
            "amenity": amenity,
            "status": "upcoming",
            "reservation_time": realTime,
        }

        console.log(data);

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
                    confirmAlert({
                        title: 'Confirmation',
                        message: 'Are you sure?',
                        buttons: [
                            {
                                label: 'Yes',

                            },
                            {
                                label: 'No',
                            }
                        ]
                    });

                } else if (response.status === 408) {
                    alert("SOMETHING WENT WRONG!")
                }
            })

            .catch((error) => {
                console.error('Error:', error);
            });

    }



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
                                onChange={selectAmenity}
                                value={defaultOption}
                                placeholder="Select an option" />
                        </div>

                    </Col>

                    <Col span={9}>
                        <div className="dropdownB">
                            <Dropdown
                                options={TimeOptions}
                                onChange={selectTime}
                                value={defaultTimeOption}
                                placeholder="Select an option" />
                        </div>
                    </Col>
                </Row>
                <div>
                    <button className="submit" onClick={submit}>Submit</button>
                </div>



            </Col>
        </Row>

    )

}

export default BookAmenityResident;