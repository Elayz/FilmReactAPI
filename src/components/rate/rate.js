import React, {Component} from 'react';
import { Rate } from 'antd';

const styleRate = {
    height: '10px',
    width: '300px',
    position: 'absolute',
    bottom: '30px'
}
export default class RateStar extends Component{
    render() {
        return (
            <Rate
                onChange={(value) => this.props.ratedAdd(value, this.props.idItem)}
                style={styleRate}>
            </Rate>
        )
    }
}
