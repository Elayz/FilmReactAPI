import React, {Component} from 'react';
import { Pagination } from 'antd';

const stylePagination = {
    margin: '10px',
    alignSelf: 'center',
}

export default class Paginationn extends Component {
    render(){
        const emptyIcon = <></>;
        const itemRender = (current, type, originalElement) => {
            if (type === 'page') {
                // Возвращает желаемый текст вместо номера страницы
                return current === 1 ? 'Search' : current === 2 ? 'Rated' : current.toString();
            }
            return originalElement;
        };

        return (
            <Pagination
                onChange={this.props.ratedShow}
                prevIcon={emptyIcon}
                nextIcon={emptyIcon}
                style={stylePagination}
                defaultCurrent={1}
                total={20}
                itemRender={itemRender}
            />
        );
    }
};


























