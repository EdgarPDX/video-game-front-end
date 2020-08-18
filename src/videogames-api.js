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

export function removeGame(id) {
    return request.delete(`${URL}/videogames/${id}`);
}
export function updateGame(id, updatedGame){
    return request.put(`${URL}/videogames/${id}`, updatedGame);

}

export function getGameTypes() {
    try{
        return request.get(`${URL}/gametypes`);
    } catch(e) {
        return { error: e.message}
    }
}
