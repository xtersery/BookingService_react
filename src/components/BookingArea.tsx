import React, { useState } from 'react';
import { Col, Typography, Row, Button, MenuProps, Menu, DatePicker, Radio, Select, SelectProps} from 'antd';
import { DingtalkOutlined, CarOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import CitiesEntry from './CitiesEntry';
import { useNavigate, Link } from 'react-router-dom';
import type { Dayjs } from 'dayjs';

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

export default function BookingArea() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState<string>('');
    const [booking, setBooking] = useState<string>('');
    const [passenger, setPassenger] = useState<string>('');
    const [classDet, setClassDet] = useState<string>('');
    const [json, setJson] = useState({});
    const [object, setObject] = useState({});
    const [timeData, setTimeData] = useState({});

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    }

    const bookingOption: MenuProps['onClick'] = (e) => {
        setBooking(e.key);
    }

    const pickDate= (_values, dateStrings: [string, string]) => {
        let start: string = dateStrings[0];
        let end: string = dateStrings[1];
        setTimeData({
            "startDate": start,
            "endDate": end
        })
    }

    const pickPassenger = (value: string) => {
        setPassenger(value);
    }

    const pickClass = (value: string) => {
        setClassDet(value);
        setObject({
            ...json,
            ...timeData,
            "passenger": passenger,
            "classDet": value
        })
    }

    // const sendRequest = async (object: {}) => {
    //     await fetch('http://localhost:8080/', {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: JSON.stringify(object),
    //         headers: {
    //             'Detail': 'requisites',
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .catch((err) => console.log(err.message));

    // }

    const parseData = (value: {}) => {
        setJson(value);
    }

    return (
        <>
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

            <Col span={6} offset={6} style={{ backgroundColor: '#fff', minHeight: '65vh'}}>

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
                            onSelect={pickPassenger}
                            options={passengers}
                            size="middle"
                            style={{ width: '90%', paddingTop: '5pt' }}
                            placeholder={'Choose a passenger'}
                            bordered={false}
                            />
                        <Select
                            onSelect={pickClass}
                            options={classDetails}
                            size="middle"
                            style={{ width: '90%', paddingTop: '5pt' }}
                            placeholder={'Choose a class'}
                            bordered={false}
                            />
                    </Row>

                    <Row>
                        <Link
                        to={`../offers`} state={{...object}}>
                            Find
                        </Link>
                        <Button onClick={() => navigate(-1)} type="primary">Back</Button>
                    </Row>
                </div>
            </Col>
        </>
    );
};

const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };


const options = [
    {
        key: 'trips',
        label: 'MY TRIPS'
    },
    {
        key: 'book',
        label: 'BOOK A TRIP'
    },
    {
        key: 'status',
        label: 'FLIGHT STATUS'
    },
    {
        key: 'checkin',
        label: 'CHECK IN'
    }
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
        value: '1 Adult',
        label: '1 Adult'
    },
    {
        value: '1 Child',
        label: '1 Child'
    }
]

const classDetails: SelectProps['options'] = [
    {
        value: 'Econom',
        label: 'Econom'
    },
    {
        value: 'Business',
        label: 'Business'
    },
    {
        value: 'Comfort',
        label: 'Comfort'
    }
]
