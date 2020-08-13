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
        <h1>Video Games</h1>
        <ul>
          {
            this.state.games.map((game) => {
              return <li>
                  <p>Title:{game.name}</p>
                  <p>Type:{game.type}</p>
                  <p>Rating:{game.rating}</p>
                  <p>Adult: {game.adult ? 'HELL YES': 'Heck No'}</p>
                  </li> 
            })
          }
        </ul>
        
      </div>
    )
  }
}
