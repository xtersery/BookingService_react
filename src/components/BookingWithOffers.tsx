import React, {useState} from 'react'
import { Col, Typography, Row, Button, MenuProps, Menu, DatePicker, Select, SelectProps} from 'antd'
import { DingtalkOutlined, CarOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import CitiesEntry from './CitiesEntry'
import { useNavigate, useLocation } from 'react-router-dom'
import type { Dayjs } from 'dayjs'
import FlightOffers from './FlightOffers'
import { OfferItem, OffersListProps } from './OffersListProps'

type GenericFn = (value: Dayjs) => string;

const { RangePicker } = DatePicker;

const Text = styled.div`
    padding: 0 30%;
    font-family: Bebas;
    font-weight: normal;
    font-size: 2rem;
    letter-spacing: 2px;
`

const Options = styled.div`
    width: 100%;
`

export default function BookingWithOffers() {
    const location = useLocation()
    const object = location.state
    const navigate = useNavigate()
    const [current, setCurrent] = useState<string>('')
    const [booking, setBooking] = useState<string>('')
    const [pass, setPassenger] = useState<string>('')
    const [classD, setClassDet] = useState<string>('')
    const [json, setJson] = useState<{}>({})
    const [offers, setOffers] = useState<OfferItem[]>([]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(-1);
    }

    const bookingOption: MenuProps['onClick'] = (e) => {
        setBooking(e.key);
    }

    const pickPassenger = (value: string) => {
        setPassenger(value);
    }

    const pickClass = (value: string) => {
        setClassDet(value);
    }


    const pickDate= (_values, dateStrings: [string, string]) => {
        let start: string = dateStrings[0];
        let end: string = dateStrings[1];
        const data = {
            "startDate": start,
            "endDate": end
        }
        // sendRequest(object);
    }

    const sendRequest = async (object: {}) => {
        await fetch('http://localhost:8080/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(object),
            headers: {
                'Detail': 'requisites',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(object => {
            try {
                object.data.map((item) => {
                    setOffers(offers => [...offers, item])
                })
            } catch (err) {
                console.log('Could not parse a json object')
            }
        }
        )
        .catch((err) => console.log(err.message));
    }

    const parseData = (value: {}) => {
        setJson(value);
    }
    return (
        <>
        <Row style={{minHeight: '85vh'}}>
        <Col span={6} style={{ backgroundColor: '#fff'}}>
            <Menu onClick={onClick} selectedKeys={[current]} mode='inline'
                    style={{
                        ...centerStyle,
                        background: 'transparent'
                        }}>
                    {options.map((item) =>
                    <Menu.Item key={item.key}
                    style={{
                        ...centerStyle,
                        fontFamily: 'Bebas',
                        fontWeight: 'normal',
                        fontSize: '1.6rem',
                        minHeight: '15vh',
                        letterSpacing: '2px',
                        background: 'rgba(220, 220, 220, 0.1)',
                        backdropFilter: 'blur(45px)'
                    }}
                    >{`${item.label}`}</Menu.Item>
                    )}
            </Menu>

            <div className="unique">
                <Menu onClick={bookingOption} selectedKeys={[booking]} mode='inline'
                style={{ ...centerStyle,
                        marginBottom: '5pt',
                        backgroundColor: 'lightgray',
                        borderRadius: '20px'
                        }} items={bookingOptions}>
                        {bookingOptions.map((item) => <Menu.Item key={item.key}>{`${item.label}`}</Menu.Item>)}
                </Menu>
                <Typography.Text style={{fontSize: '1rem', fontWeight: 'semi-bold'}}>Destination Details</Typography.Text>
                    <CitiesEntry returnData={parseData}/>
                <br/>

                <Row style={{ padding: '5% 0' }}>
                    <RangePicker onChange={pickDate}/>
                </Row>

                <Row style={{ padding: '5% 0 5%'}}>
                    <Typography.Text style={{fontSize: '1rem', fontWeight: 'semi-bold'}}>Passenger Details</Typography.Text>
                    <Select
                    onChange={pickPassenger}
                    options={passengers}
                    size="middle"
                    style={{ width: '90%', paddingTop: '5pt' }}
                    placeholder={'Choose a passenger'}
                    bordered={false}
                    />
                    <Select
                    onChange={pickClass}
                    options={classDetails}
                    size="middle"
                    style={{ width: '90%', paddingTop: '5pt' }}
                    placeholder={'Choose a class'}
                    bordered={false}
                    />
                </Row>

                <Row>
                    <Button onClick={() => sendRequest(object)}>Confirm</Button>
                    <Button onClick={() => navigate(-1)} type="primary">Back</Button>
                </Row>
            </div>
        </Col>

        <Col flex="auto" style={{maxWidth: '75%'}}>
            <FlightOffers
            object={object}
            offers={offers}/>
        </Col>
        </Row>
        </>
    );
}


const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };


const options = [
    {
        key: 'book',
        label: 'BOOK A TRIP'
    },
];


const bookingOptions = [
    {

        label: 'Flight',
        key: 'flight',
        icon: <DingtalkOutlined />
    },
    {
        key: 'Car',
        label: 'Car',
        icon: <CarOutlined />
    }
];

const passengers: SelectProps['options'] = [
    {
        value: 'adult',
        label: '1 Adult'
    },
    {
        value: 'kid',
        label: '1 Child'
    }
]

const classDetails: SelectProps['options'] = [
    {
        value: 'econom',
        label: 'Econom'
    },
    {
        value: 'business',
        label: 'Business'
    },
    {
        value: 'comfort',
        label: 'Comfort'
    }
]
