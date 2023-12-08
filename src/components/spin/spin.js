import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const loadingStyle = {
    // display:'flex',
    backgroundColor: 'gray',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
}
const loadingCircleStyle = {
    fontSize: 150,
    display: 'flex',
    alignSelf: 'center'
}
const Spinn = () => (
    <Spin style={loadingStyle}
        indicator={
            <LoadingOutlined
                style={loadingCircleStyle}
                spin
            />
        }
    />
);
export default Spinn;