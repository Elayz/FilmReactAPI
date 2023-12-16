import React, { Component } from 'react';
import Item from "../item-list/item-list";
import styles from './header.css'
export default class Header extends Component {
    render() {
            const elements = this.props.data.map((item) => (
                <Item
                    idItem={item.id}
                    key={item.id}
                    original_title={item.original_title}
                    poster_path={item.poster_path}
                    overview={item.overview}
                    release_date={item.release_date}
                    genres={this.props.genres}
                    genre={item.genre_ids[0]}
                    truncateString={this.props.truncateString}
                    voteAvg={item.vote_average}
                    ratedAdd={this.props.ratedAdd}
                    rated={this.props.rated}
                    rating={item.rating}
                ></Item>
            ));
        return (
            <div className="style2">
                <div>
                {this.props.data.length === 0 ? <p className="styleNoResults">No results</p> :
                    <div className="text-white bg-primary mb-3 style1">
                        {elements}
                    </div>}
                </div>
            </div>

        )
    }
}
