import React, { useState } from 'react';
import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import '../../index.css';



const ReservationsResident = ({ user, setUser }) => {
    const [cancel, setCancel] = useState(false);

    const cancelButton = () => {
        confirmAlert({
            title: 'Confirm to cancel',
            message: 'Are you sure to cancel this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        setCancel(true);
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
            <Col span={19} className="reservation">

                <div className="title">
                    Reservations
                </div>

                {cancel ?
                    <div className="middle">
                        You have no reservations.
                    </div> :
                    <div className="middle">
                        <div className="bookTime">
                            Sunday, November 1st, 2020
                         </div>

                        <div>
                            <div className="bookDetails">
                                <Row className="row">
                                    <Col span={8} className="amenityName">Common Room 09:00</Col>
                                    <Col span={1} className="cancel"><button onClick={cancelButton}>CANCEL</button></Col>
                                </Row>

                            </div>

                        </div>

                    </div>
                }

            </Col>
        </Row>
    )
}

export default ReservationsResident;