import React, {JSX} from 'react'
import ReactLogo from './images/track.svg';
import {Row, Col, Button, Typography} from 'antd'
import { IonIcon } from '@ionic/react';
import '../css styles/FlightOffers.css'
import { ObjectItem, OfferItem } from './OffersListProps';
import { informationCircleOutline, peopleOutline, paperPlaneOutline } from 'ionicons/icons';


export const Offer = ({startTime, endTime, company, flightNumber, price, departure, destination, passenger, classDet, startDate, endDate}) => {
    switch (company){
        case "DP":
            company = "Pobeda"
            break
        case "S7":
            company = "S7 Airlines"
            break
        case "SU":
            company = "Aeroflot"
            break
        case "UT":
            company = "UTair"
            break
    }

    return (
        <>
        <div className="offer-container">
            <div className="offer-info">
                <div className="flight">
                    <div className="from">
                        <div className="content">
                            <Row className='time' style={{alignContent: 'center'}}>
                                <IonIcon icon={informationCircleOutline} style={{color: 'grey', alignSelf: 'center', fontSize: '0.7em'}}/>
                                {`${startTime}`}
                            </Row>
                            <Row style={{justifyContent: 'center',
                                         fontSize: '1.1em',
                                        //  paddingBottom: '5px'
                                         }}>
                                            {`${departure.split("(")[0]}`}
                                            </Row>
                            <Row style={{justifyContent: 'center',
                                         fontSize: '1.1em'}}>
                                            {`${startDate}`}
                                            </Row>
                        </div>
                    </div>
                    <div className="track">
                        <div className="inner">
                            <Row>
                                <img src={ReactLogo} alt="Flight track logo"/>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <div>
                                    {`${departure.split("(")[1].split(")")[0]}`}
                                    </div>
                                <hr className="divider"/>
                                <div>
                                    {`${destination.split("(")[1].split(")")[0]}`}
                                    </div>
                            </Row>
                        </div>
                    </div>
                    <div className="to">
                        <div className="content">
                            <Row className='time' style={{alignContent: 'center'}}>
                                <IonIcon icon={informationCircleOutline} style={{color: 'grey', alignSelf: 'center', fontSize: '0.7em'}}/>
                                {`${endTime}`}
                            </Row>
                            <Row style={{justifyContent: 'center',
                                         fontSize: '1.1em',
                                        //  paddingBottom: '5px'
                                    }}>
                                        {`${destination.split("(")[0]}`}
                                        </Row>
                            <Row style={{justifyContent: 'center',
                                         fontSize: '1.1em'}}>
                                            {`${endDate}`}
                                            </Row>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="inner">
                        <Row
                        style={{paddingLeft: '20%', maxWidth: '80%', justifyContent: 'space-between'}}
                        >
                            <div className="company">
                            {`${company}`}
                            </div>
                            <hr className="divider"/>
                            <div className="flightNumber">
                            {`${flightNumber}`}
                            </div>
                        </Row>
                        <Row
                        style={{maxWidth: '100%', justifyContent: 'center', paddingBottom: '10px', paddingTop: '10px'}}
                        >
                            <button className="price-btn">{`${price}`}</button>
                        </Row>
                        <Row
                        style={{paddingLeft: '15%', maxWidth: '85%', justifyContent: 'space-between'}}
                        >
                            <div className="passenger"><IonIcon icon={peopleOutline} style={{fontSize: '1.2em'}}/>
                            {`${passenger}`}
                            </div>
                            <hr className="divider"/>
                            <div className="class"><IonIcon icon={paperPlaneOutline} style={{fontSize: '1.2em'}}/>
                            {`${classDet}`}
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
