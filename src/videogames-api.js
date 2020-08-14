import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchGames(){
    return request.get(`${URL}/videogames`);
}

export function fetchGame(id) {
    return request.get(`${URL}/videogames/${id}`)
}

export function addGame(gameData) {
    return request.post(`${URL}/videogames`, gameData)
}


