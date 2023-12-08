import React from 'react';
import { Alert, Space } from 'antd';

const Error = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    >
        <Alert
            style={{height: '100vh'}}
            message="Server error"
            description="Please fix your internet \ VPN connection or try later"
            type="error"
            showIcon
        />
    </Space>
);
export default Error;