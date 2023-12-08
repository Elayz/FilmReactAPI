export default class SwapiService {
    constructor() {
        const api_key = 'e8567970a5513a58fc61713e90209bf8'
        this.urlBase =  `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
        this.urlGanre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
    }
    async getRes(url){
        const res = await fetch(url);
        if (!res.ok){
            throw new Error("trouble in fetch((((")
        }
        return res.json();
    }

    async getAllFilms(query){
        const films = await this.getRes(`${this.urlBase}&query=${query}`);
        return films;
    }
    async getAllGanre(){
        const ganre = await this.getRes(`${this.urlGanre}`);
        return ganre;
    }
}
