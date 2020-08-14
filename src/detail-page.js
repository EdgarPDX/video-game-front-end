import React, { Component } from 'react'
import { fetchGame } from './videogames-api.js'
import './Detail.css';

export default class DetailPage extends Component {
    state = {
        game: {}
    }

    componentDidMount = async () => {
        const data = await fetchGame(this.props.match.params.id)
        this.setState({
            game: data.body
        })
    }
    render() {
        return (
            <div>
                <span>
                    <img className='details-title' src='../game-details.png' alt='gamedetails'/>
                </span>
                    <h2>{this.state.game.name}</h2>
                    <img className='star' src='../star.png' alt='star' />
                <ul className='details-page'>
                    <li><h3>My Rating: </h3>{this.state.game.rating} STARS</li>
                    <li><h3>Adult: </h3>{this.state.game.adult? 'HELL YES': 'Heck No'}</li>
                    <li><h3>Type: </h3>{this.state.game.type}</li>
                </ul>
            </div>
        )
    }
}
