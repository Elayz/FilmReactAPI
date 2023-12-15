import React, { Component } from 'react';
import SwapiService from "../services/swapi-serv";
import RateStar from "../rate/rate";
import RateStarReadOnly from "../rateReadOnly/rateReadOnly";


export default class Item extends Component {
    render() {
        const rankFixed = this.props.voteAvg.toFixed(1);
        const uberRank = this.props.voteAvg.toFixed(0);
        const overviewLength = 200;
        let truncateText
        if(this.props.overview){
            if(this.props.overview.length > overviewLength){
                truncateText = this.props.truncateString(this.props.overview, overviewLength)
            }
        }
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
            marginLeft: 'auto',
            marginRight: 'auto'
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
            fontSize: '13px',

        }
        const styleCardDate = {
            color: 'gray'
        }
        const styleForRatedCircle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
        const circleStyleBad = {
            height: '50px',
            width: '50px',
            border: '3px solid #E90000',
            borderRadius: '50%',
            color: 'black',
            padding: '10px',
            margin: '5px'
        }
        const circleStyleNotSoBad = {
            height: '50px',
            width: '50px',
            border: '3px solid #E97E00',
            borderRadius: '50%',
            color: 'black',
            padding: '10px',
            margin: '5px'
        }
        const circleStyleMedium = {
            height: '50px',
            width: '50px',
            border: '3px solid #E9D100',
            borderRadius: '50%',
            color: 'black',
            padding: '10px',
            margin: '5px'
        }
        const circleStyleGood = {
            height: '50px',
            width: '50px',
            border: '3px solid  #66E900',
            borderRadius: '50%',
            color: 'black',
            padding: '10px',
            margin: '5px'
        }
        const cardBody = {
            padding: '0',
            maxHeight: '299px'
        }
        const styleMainInfo = {
            position: 'relative'
        }
        let whatRateStyle;
        if(rankFixed < 3){
            whatRateStyle = circleStyleBad;
        }else if(rankFixed >= 3 && rankFixed < 5){
            whatRateStyle = circleStyleNotSoBad;
        }else if(rankFixed >= 5 && rankFixed < 7){
            whatRateStyle = circleStyleMedium;
        }else if(rankFixed => 7){
            whatRateStyle = circleStyleGood;
        }
        // console.log(this.props.ratedAdd)
        return (
            <div className="card mb-3" style={style1}>
                    <div>
                        <div style={cardBody} className="card-body">
                            {this.props.poster_path ?
                                <div>
                                    <img style={styleImg} src={`${imgPath}${this.props.poster_path}`}></img>
                                </div>
                                :
                                <div>
                                    <img style={styleImg} src={`${imgPath}/zCyuiyIhbhgEOZde81qTgXbO0pw.jpg`}></img>
                                </div>
                            }
                            <div style={styleMainInfo}>
                                <div style={styleForRatedCircle}>
                                    <h4 style={styleCardHeader}>{this.props.original_title}</h4>
                                    {rankFixed? <div style={whatRateStyle}>{rankFixed >= 10 ? uberRank : rankFixed}</div> : <div style={circleStyleBad}>Not found</div>}
                                </div>
                                <p style={styleCardDate}>{this.props.release_date?this.props.release_date:'No date'}</p>
                                <div  style={styleMini}>
                                    <p  style={styleMiniText}>{genreFinal ? genreFinal : '(⁠☉⁠｡⁠☉⁠)⁠!'}</p>
                                </div>
                                {this.props.overview.length <= overviewLength
                                    ? <p style={styleCardText} className="card-text">{this.props.overview
                                        ? this.props.overview
                                        : ifNoOverview}</p>
                                    :  <p style={styleCardText} className="card-text">{truncateText}</p>
                                }
                                {!this.props.rated
                                    ? <RateStar idItem={this.props.idItem} ratedAdd={this.props.ratedAdd}></RateStar>
                                    : <RateStarReadOnly rateValue={this.props.rateValue}></RateStarReadOnly>
                                }
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
