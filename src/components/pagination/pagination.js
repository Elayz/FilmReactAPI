import React, {Component, useState} from 'react';
import { Pagination } from 'antd';

export default class Paginationn extends Component {

    render() {
        const stylePagination = {
            marginBottom: '30px',
            alignSelf: 'center',
        }
        return(
            <Pagination onChange={this.props.changeCurrentPage} style={stylePagination} size="small" total={50} />
        )
    }
}


























