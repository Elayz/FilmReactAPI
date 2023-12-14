import React, {Component} from 'react';
import { Rate } from 'antd';

const styleRate = {
    height: '10px',
    width: '300px',
    position: 'absolute',
    bottom: '30px'
}
export default class RateStarReadOnly extends Component{
    render() {
        return (
        <Rate style={styleRate} disabled defaultValue={this.props.rateValue}></Rate>
        )
    }
}



