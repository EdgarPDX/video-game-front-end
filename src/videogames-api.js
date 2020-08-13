/* eslint-disable */

import request from 'superagent';

const URL = 'https://first-sql-2020.herokuapp.com';

export function fetchGames(){
    return request.get(`${URL}/videogames`);
}


