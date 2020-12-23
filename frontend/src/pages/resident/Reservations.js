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
    }, []);

    const cancel = (reservationEntity) => {
        confirmAlert({
            title: 'Confirm to cancel',
            message: 'Are you sure to cancel this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log('reservation to be deleted:', reservationEntity);
                        fetch("/CPMS_war_exploded/reservation", {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(reservationEntity),
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    alert("SUCCESS");
                                }
                            })
                            .catch((error) => {
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
                    Reservations.
                </div>

                { bool ?
                    <div className="middle">
                        You have no reservations.
                    </div> :
                    <div className="middle">
                        {
                            reservations.map((reservation, index) => {
                                const date = new Date(reservation.reservationDate);
                                const approved = reservation.status === "approved";
                                // index added as key to resolve Warning:
                                // Each child in a list should have a unique "key" prop
                                return <div key={index}>
                                    <div className={"bookTime"}>
                                        { date.toLocaleDateString() }
                                    </div>
                                    <div className="bookDetails">
                                        <Row className="row">
                                            <Col span="14"> <span className="amenityName"> {reservation.reservationTime + " " + reservation.amenity}</span>
                                                {approved ? "  (approved)" : "  (not yet approved)"}</Col>
                                            <Col span="1" className={"cancel floatRight"}>
                                                <button onClick={
                                                () => {
                                                    cancel({
                                                        reservation_id: reservation.reservationId,
                                                        user_id: reservation.userId,
                                                        reservation_date: reservation.reservationDate,
                                                        reservation_time: reservation.reservationTime,
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
                }

            </Col>
        </Row>
    )
};

export default ReservationsResident;