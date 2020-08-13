import './App.css';
import { fetchGames } from './videogames-api.js'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    games: []
  }

  componentDidMount = async () => {
    const data = await fetchGames()

    this.setState({
      games: data.body
    })
  }
  render() {
    return (
      <div>
          <header>
          <h1>Video Games</h1>
          </header>
        
        <ul>
          {
            this.state.games.map((game) => {
              return <li>
                  <h2>{game.name}</h2>
                  <p>Type:<span>{game.type}</span> </p>
                  <p>Rating: <span>{game.rating}</span></p>
                  <p>Adult: <span>{game.adult ? 'HELL YES': 'Heck No'}</span></p>
                  </li> 
            })
          }
        </ul>
        
      </div>
    )
  }
}
