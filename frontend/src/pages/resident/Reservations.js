import React, { useState, useEffect } from 'react';

import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import '../../index.css';



const ReservationsResident = ({ user, setUser }) => {
    const [bool, alterBool] = useState(true);
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        fetch("/CPMS_war_exploded/reservation", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(jsonData => {
                console.log('Success:', jsonData);
                console.log(jsonData.length);
                if (jsonData.length !== 0) {
                    alterBool(false);
                }
                setReservations(jsonData);

            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }, [reservations]);

    const cancel = (reservationEntity) => {
        confirmAlert({
            title: 'Confirm to cancel',
            message: 'Are you sure to cancel this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch("/CPMS_war_exploded/reservation", {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(reservationEntity),
                        }).catch((error) => {
                            console.log('Error:', error);
                        })}
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident user={user} setUser={setUser} />

            </Col>
            <Col span={19} className="reservation">

                <div className="title">
                    Reservations
                </div>

                { bool ?
                    <div className="middle">
                        You have no reservations.
                    </div> :
                    <div className="middle">
                        {
                            reservations.map((reservation, index) => {
                                const dateTime = new Date(reservation.reservationTime);
                                return <div>
                                    <div className={"bookTime"}>
                                        { dateTime.toLocaleDateString()}
                                    </div>
                                    <div className="bookDetails">
                                        <Row className="row">
                                            <Col span={8} className="amenityName">{ dateTime.toLocaleTimeString() + " " + reservation.amenity }</Col>
                                            <Col span={1} className="cancel"><button onClick={
                                                () => {
                                                    cancel({
                                                        reservationId: reservation.reservationId,
                                                        userId: reservation.userId,
                                                        reservationTime: reservation.reservationTime,
                                                        amenity: reservation.amenity,
                                                        status: reservation.status
                                                    });
                                                }
                                            }>CANCEL</button></Col>
                                        </Row>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    /*
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
                    */

                }

            </Col>
        </Row>
    )
};

export default ReservationsResident;