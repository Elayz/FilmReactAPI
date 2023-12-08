import React, { Component } from 'react';
import SwapiService from "../services/swapi-serv";
import Item from "../item-list/item-list";


export default class Header extends Component {
    render()
    {
        const style1 = {
            maxWidth: '100%',
            minWidth: '20rem',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
        const elements = this.props.data.map((item) => (
            <Item
                key={item.id}
                original_title={item.original_title}
                poster_path={item.poster_path}
                overview={item.overview}
                release_date={item.release_date}
                genres={this.props.genres}
                genre={item.genre_ids[0]}
            ></Item>
        ));
        return (
            <div className="text-white bg-primary mb-3" style={style1}>
                {elements}
            </div>
        )
    }
}
