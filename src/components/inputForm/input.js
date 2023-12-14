import React, {Component} from 'react';
import { Input } from 'antd';
const styleInput = {
    maxWidth: '35rem',
    minWidth: '35rem',
    alignSelf: 'center',
}
export default class InputForm extends Component{
    render() {
        return (
            <Input
                placeholder="Basic usage"
                style={styleInput}
                onChange={this.props.onChangeInput}
            />
        )
    }
}
