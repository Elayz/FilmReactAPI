import React, { Component } from 'react';
import SwapiService from "../services/swapi-serv";
import Item from "../item-list/item-list";
import InputForm from "../inputForm/input";
import Spinn from "../spin/spin";


export default class Header extends Component {
    render() {
        const style1 = {
            maxWidth: '100%',
            minWidth: '20rem',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
        const styleNoResults = {
            maxWidth: '100%',
            minWidth: '20rem',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: 'gray'
        }
        const style2 = {
            display: 'flex',
            flexDirection: 'column'
        }
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
                    rateValue={this.props.rateValue}
                ></Item>
            ));
        return (
            <div style={style2}>
                <div>
                {this.props.data.length === 0 ? <p style={styleNoResults}>No results</p> :
                    <div className="text-white bg-primary mb-3" style={style1}>
                        {elements}
                    </div>}
                </div>
            </div>

        )
    }
}
