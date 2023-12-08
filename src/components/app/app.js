import React, { Component } from 'react';
import Header from "../header/header";
import SwapiService from "../services/swapi-serv"
import Spinn from "../spin/spin";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            genres: null,
        }
        this.filmsDataFromServer = () => {
            const apiRes = new SwapiService()
            apiRes.getAllFilms('killer')
                .then((res) => {
                    this.setState({data: res.results})
                })
        }
        this.ganreData = () => {
            const apiRes = new SwapiService()
            apiRes.getAllGanre()
                .then((res) => {
                    this.setState({genres: res.genres})
                })
        }
        this.componentDidMount = () => {
            this.filmsDataFromServer()
            this.ganreData()
        }
    }

    render() {
        const mainBlock = {
            display:'flex',
            flexDirection:'column',
            backgroundColor: 'lightgray'
        }
        const loadingStyle = {
            // display:'flex',
            // backgroundColor: 'red'
        }
        return (
            <div style={mainBlock}>
                {this.state.data && this.state.genres?
                <Header
                    data={this.state.data}
                    genres={this.state.genres}
                ></Header>
                    :
                    <Spinn></Spinn>
                }
            </div>
        );
    }
}
