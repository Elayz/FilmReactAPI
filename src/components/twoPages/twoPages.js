import React, {Component} from 'react';
import { Pagination } from 'antd';
import './twoPages.css'

const stylePagination = {
    margin: '10px',
    alignSelf: 'center',
    display: 'flex',
    color: 'black'
}

export default class TwoPages extends Component {
    render(){

        return (
            <div
                className='stylePagination'
            >
                <p onClick={this.props.ratedUnshow}>Search</p>
                <p onClick={this.props.ratedShow}>Rated</p>
            </div>
        );
    }
};
