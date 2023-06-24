import React from 'react';
import { Row, Col } from 'antd';
import {  Select, Space } from 'antd';
import type { SelectProps } from 'antd';


const cities: Array<string> = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
'Нижний Новгород', 'Челябинск', 'Омск', 'Краснодар', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Пермь', 'Воронеж', 'Волгоград', 'Самара'];

const options: SelectProps['options'] = [];

for (let i = 0; i < cities.length; i++) {
    options.push({
        value: cities.at(i),
        label: cities.at(i)
    });
}


const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
};

const BookingArea: React.FC = () => {

    return (
        <>
            <Row justify="start">
                <Col span={5}>
                    <Space direction="vertical" style={{width: '100%'}}>
                <Select
                    size="middle"
                    style={{ width: '90%' }}
                    placeholder={'Город вылета'}
                    onChange={handleChange}
                    options={options}
                    />
                    </Space>
                </Col>
                <Col span={5}>
                    <Space direction="vertical" style={{width: '100%'}}>
                <Select
                    size="middle"
                    style={{ width: '90%' }}
                    placeholder={'Город прилета'}
                    onChange={handleChange}
                    options={options}
                    />
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default BookingArea;
