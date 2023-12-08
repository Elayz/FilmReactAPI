import React, { Component } from 'react';
import SwapiService from "../services/swapi-serv";


export default class Item extends Component {
    render() {
        console.log(this.props)
        const ifNoOverview = 'Что вершит судьбу человечества в этом мире?' +
                    ' Некое незримое существо или закон, подобно Длани Господней' +
                    ' парящей над миром? По крайне мере истинно то, что человек не' +
                    ' властен даже над своей волей.'
        let genreFinal = ''
        const genreDecode = this.props.genres.filter((genre) =>genre.id === this.props.genre);
        if(genreDecode[0] !== undefined){
            genreFinal = genreDecode[0].name
        }
        const imgPath = 'https://image.tmdb.org/t/p/w200'
        const style1 = {
            maxWidth: '35rem',
            minWidth: '35rem',
            backgroundColor: 'white',
            boxShadow: '15px 15px 30px gray',
            margin: '10px'
        }
        const styleImg = {
            marginRight: '20px'
        }
        const styleMini = {
            maxWidth: '4rem',
            maxHeight: '3rem',
            display: 'flex',
            flexDirection: "row",
        }
        const styleMiniText = {
            padding: '2px',
            borderRadius: '5px',
            marginRight: '5px',
            color: '#454545',
            border: '1px solid gray',
            paddingLeft: '5px',
            paddingRight: '5px'
        }
        const styleCardHeader = {
            color: 'black',
        }
        const styleCardText = {
            color: 'black',
            fontSize: '13px'
        }
        const styleCardDate = {
            color: 'gray'
        }
        return (
            <div className="card mb-3" style={style1}>
                    <div>
                        <div className="card-body">
                            {this.props.poster_path ?
                                <div>
                                    <img style={styleImg} src={`${imgPath}${this.props.poster_path}`}></img>
                                </div>
                                :
                                <div>
                                    <img style={styleImg} src={`${imgPath}/RUJ5jSqczEgHodGM1UUt6yrdgg.jpg`}></img>
                                </div>
                            }
                            <div>
                                <h4 style={styleCardHeader}>{this.props.original_title}</h4>
                                <p style={styleCardDate}>{this.props.release_date?this.props.release_date:'No date'}</p>
                                <div  style={styleMini}>
                                    <p  style={styleMiniText}>{genreFinal ? genreFinal : '(⁠☉⁠｡⁠☉⁠)⁠!'}</p>
                                </div>
                                <p style={styleCardText} className="card-text">{this.props.overview ? this.props.overview : ifNoOverview}</p>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
