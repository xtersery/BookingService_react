import React, { useState } from 'react'
import ReactLogo from './images/track.svg';
import {Row, Col, Button} from 'antd'
import { IonIcon } from '@ionic/react';
import {Offer} from './Offer'
import { OffersListProps } from './OffersListProps';

const FlightOffers: React.FC<OffersListProps> = ({offers, object}) => {
    if (offers?.length != 0) {
        return (
            <div className="offersArea">
                {
                    offers.map((offer, i) => (
                        <Offer
                            key={i}
                            departure={object.departure}
                            destination={object.destination}
                            startTime={offer.start}
                            endTime={offer.end}
                            passenger={object.passenger}
                            classDet={object.classDet}
                            startDate={object.startDate}
                            endDate={object.endDate}
                            company={offer.company}
                            flightNumber={offer.flightNumber}
                            price={offer.price}
                        />
                    ))
                }
            </div>
            );
    }

    return(
        <div>
        </div>
      );
}

export default FlightOffers;
