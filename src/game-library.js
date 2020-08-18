import './App.css';
import { fetchGames } from './videogames-api.js';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GameLibrary extends Component {
  state = {
    games: []
  }

  componentDidMount = async () => {
    const data = await fetchGames()

    this.setState({
      games: data.body
    });
  };
  render() {
    return (
      <>
          
        <ul>
          {
            this.state.games.map((game) => {
              return <li key={game.id}>
                        <Link to={`/detail/${game.id}`} key ={`${game.id}-${game.name}`}>
                            <h2>{game.name}</h2>
                        </Link>
                        <p>Type:<span> {game.type_id}</span> </p>
                        <p>Rating: <span> {game.rating}</span></p>
                        <p>Adult: <span> {game.adult ? 'HELL YES': 'Heck No'}</span></p>
                    </li> 
            })
          }
        </ul>
        
      </>
    )
  }
}
