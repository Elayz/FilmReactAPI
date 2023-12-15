import React, { Component } from 'react';
import Header from "../header/header";
import SwapiService from "../services/swapi-serv"
import Spinn from "../spin/spin";
import Error from "../error/error";
import _ from "lodash";
import InputForm from "../inputForm/input";
import {Pagination} from "antd";
import Paginationn from "../pagination/pagination";
import TwoPages from "../twoPages/twoPages";

const apiRes = new SwapiService()
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            dataReserve: null,
            genres: null,
            serverError: false,
            inputValue: '',
            rated: false,
            guestSessionId: null,
            rateValue: null,
            currentPage: 1,
        };
        this.filmsDataFromServer = () => {
            apiRes
                .getAllFilms(this.state.inputValue, this.state.currentPage)
                .then((res) => {
                    this.setState({
                        data: res.results,
                        dataReserve: res.results,
                    })
                })
                .catch((error) => {
                    this.setState({
                        serverError: true
                    });
                })
        };
        this.changeCurrentPage = (a) =>{
            this.setState({
                currentPage: a,
            })
            setTimeout(this.filmsDataFromServer, 0);
        }
        this.ganreData = () => {
            apiRes
                .getAllGanre()
                .then((res) => {
                    this.setState({genres: res.genres});
                })
                .catch((error) => {
                    this.setState({
                        serverError: true
                    });
                })
        }
        this.getInputValue = (f) =>{
             this.setState({
                inputValue: f.currentTarget.defaultValue,
                 data: null
            });
             setTimeout(this.filmsDataFromServer, 0);
        }
        this.onChangeInput = () => _.debounce(this.getInputValue, 500);
        this.truncateString = (str, maxLength) => {
            if (str.length <= maxLength) {
                return str;
            } else {
                // Обрезаем строку до максимальной длины минус длина троеточия
                let truncatedStr = str.substr(0, maxLength - 3);

                // Находим последнее пробельное символ перед обрезанным текстом
                let lastSpaceIndex = truncatedStr.lastIndexOf(" ");

                // Если пробел не найден, возвращаем обрезанный текст с троеточием
                if (lastSpaceIndex === -1) {
                    return truncatedStr + "...";
                } else {
                    // Обрезаем строку до последнего пробельного символа
                    truncatedStr = truncatedStr.substr(0, lastSpaceIndex);
                    return truncatedStr + "...";
                }
            }
        };
        this.createGuestSession = () => {
            apiRes.getSessionID()
                .then((res) => {
                    this.setState({
                        guestSessionId: res.guest_session_id,
                    })

                })
        }
        this.ratedShow = (a) => {
            apiRes.getAllRated(this.state.guestSessionId)
                .then((res) => {
                    this.setState({
                        data: res.results,
                        rated: true,
                    })
                })
        };
        this.ratedUnshow = () => {
            this.setState({
                data: this.state.dataReserve,
                rated: false,
            })
        }
        this.ratedAdd = (a, b) => {
            this.setState({
                rateValue: a,
            })
            apiRes.pushToRateList(a, this.state.guestSessionId, b)
        };
        this.componentDidMount = () => {
            this.filmsDataFromServer()
            this.ganreData()
            this.createGuestSession()
        };
    }

    render() {
        const mainBlock = {
            display:'flex',
            flexDirection:'column',
            backgroundColor: 'lightgray',
            minHeight: '100vh'
        }
        return (
            <div>
                {this.state.serverError ? <Error></Error> :
                <div style={mainBlock}>
                    <TwoPages
                        ratedShow={this.ratedShow}
                        ratedUnshow={this.ratedUnshow}
                    ></TwoPages>
                    {this.state.rated ?
                        <div style={mainBlock}>
                            {this.state.data && this.state.genres
                                ?
                                <Header
                                    data={this.state.data}
                                    genres={this.state.genres}
                                    truncateString={this.truncateString}
                                    rated={this.state.rated}
                                    rateValue={this.state.rateValue}
                                ></Header>
                                : <Spinn></Spinn>
                            }
                        </div>
                        :
                        <div style={mainBlock}>
                            <InputForm onChangeInput={this.onChangeInput()}></InputForm>
                            <div>
                                {this.state.data && this.state.genres
                                    ?
                                    <Header
                                        data={this.state.data}
                                        genres={this.state.genres}
                                        truncateString={this.truncateString}
                                        ratedAdd={this.ratedAdd}
                                        rated={this.state.rated}
                                    ></Header>
                                    : <Spinn></Spinn>
                                }
                            </div>
                        </div>}
                    {!this.state.data || this.state.data.length === 0 || this.state.rated
                        ?<div></div>
                        :<Paginationn changeCurrentPage={this.changeCurrentPage}></Paginationn>
                    }
                </div>}
            </div>
        );
    }
}
