import React, { Component } from 'react';
import Header from "../header/header";
import SwapiService from "../services/swapi-serv"
import Spinn from "../spin/spin";
import Error from "../error/error";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            genres: null,
            serverError: false,
        };
        this.filmsDataFromServer = () => {
            const apiRes = new SwapiService()
            apiRes.getAllFilms('killer')
                .then((res) => {
                    this.setState({data: res.results})
                })
                .catch((error) => {
                    this.setState({
                        serverError: true
                    });
                })
        };
        this.ganreData = () => {
            const apiRes = new SwapiService()
            apiRes.getAllGanre()
                .then((res) => {
                    this.setState({genres: res.genres})
                })
                .catch((error) => {
                    this.setState({
                        serverError: true
                    });
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
        return (
            <div>
                {this.state.serverError ? <Error></Error> :
                <div style={mainBlock}>
                    {this.state.data && this.state.genres
                        ?
                        <Header
                            data={this.state.data}
                            genres={this.state.genres}
                        ></Header>
                        : <Spinn></Spinn>
                    }
                </div>
            }</div>
        );
    }
}
