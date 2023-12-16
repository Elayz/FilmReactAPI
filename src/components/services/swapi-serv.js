export default class SwapiService {
    constructor() {
        this.api_key = '4063de4a02a3c77f64caa3b3a4514e76'
        this.urlBase =  `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}`;
        this.urlGanre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`;
        this.urlRated = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.api_key}`;
        this.apiBearer = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDYzZGU0YTAyYTNjNzdmNjRjYWEzYjNhNDUxNGU3NiIsInN1YiI6IjY1NzA4ODY5NDFhZDhkMDZlMmVjY2NkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F348eatfRQ91mmXEmVrrQKwIyea_KP5vDGSHm3cVLnI`
    }
    async getRes(url){
        const res = await fetch(url);
        if (!res.ok){
            throw new Error("trouble in fetch((((")
        }
        return res.json();
    }
    async postRes(url, rating){
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${this.apiBearer}`
            },
            body: `{"value":${rating}}`,
        };

        fetch(url, options)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async getAllFilms(query, currentPage){
        const films = await this.getRes(`${this.urlBase}&query=${query}&page=${currentPage}`);
        return films;
    }
    async getAllGanre(){
        const ganre = await this.getRes(`${this.urlGanre}`);
        return ganre;
    }
    async getSessionID(){
        const SessionId = await this.getRes(`${this.urlRated}`);
        return SessionId;
    }
    async getAllRated(sessuonId){
        const allRated = await this.getRes(`https://api.themoviedb.org/3/guest_session/${sessuonId}/rated/movies?api_key=${this.api_key}`);
        return allRated;
    }
    async pushToRateList(rating, sessuonId, filmID){
        const rateList = await this.postRes(`https://api.themoviedb.org/3/movie/${filmID}/rating?guest_session_id=${sessuonId}&session_id=${this.api_key}`, rating);
        return rateList;
    }
}



