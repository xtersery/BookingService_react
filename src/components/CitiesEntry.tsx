import React, { useState } from 'react';
import { Row, Col } from 'antd';
import {  Select } from 'antd';
import type { SelectProps } from 'antd';


const cities: Array<string> = ['Москва  (SVO)', 'Санкт-Петербург  (LED)',
'Новосибирск  (OVB)', 'Екатеринбург  (SVX)', 'Казань  (KZN)', 'Нижний Новгород  (GOJ)',
'Краснодар  (KRR)', 'Уфа  (UFA)'];

const options: SelectProps['options'] = [];

for (let i = 0; i < cities.length; i++) {
    options.push({
        value: cities.at(i),
        label: cities.at(i)
    });
}



function CitiesEntry({returnData = f => f}) {

    const [departure, setDeparture] = useState('');
    let destination = '';

    const pickDeparture = (value: string) => {
        setDeparture(value);
    }

    const pickDestination = (value: string) => {
        destination = value;
        console.log(`Changing destination to ${value}`);
        let json = {
            "departure": departure,
            "destination": destination
        };

        returnData(json);
    }

    // const sendRequest = async (data) => {

    //     await fetch('http://localhost:8080/', {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Detail': 'requisites',
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .catch((err) => console.log(err.message));
    // }

    return (
        <>
            <Row justify="start" style={{width: '80%', padding: '3% 0 3%'}}>

                <Select
                    onSelect={pickDeparture}
                    options={options}
                    size="middle"
                    style={{ width: '90%' }}
                    placeholder={'Город вылета'}
                    bordered={false}
                    />


            </Row>
            <Row style={{minHeight: '5pt'}}/>
            <Row style={{width: '80%'}}>


                <Select
                    onSelect={pickDestination}
                    options={options}
                    size="middle"
                    style={{ width: '90%' }}
                    placeholder={'Город прилета'}
                    bordered={false}
                    />

            </Row>
        </>
    );
};

export default CitiesEntry;
