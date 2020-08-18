import React, { Component } from 'react'
import { addGame, getGameTypes } from './videogames-api.js'
import './create.css';

export default class CreatePage extends Component {
    state = {
        name:'blank',
        rating: 5,
        adult: false,
        type_id: 1,
        gameTypes:[],
    }

    componentDidMount = async () =>{
        const gameTypeData = await getGameTypes();
        this.setState({
            gameTypes: gameTypeData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addGame({
            name: this.state.name,
            rating: this.state.rating,
            adult: this.state.adult,
            type_id: this.state.type_id,
        });

        this.setState({
            name:'',
            rating: 5,
            adult: false,
            type_id: 1,
        })
    }

    handleNameChange = e => {
        this.setState({name: e.target.value});
    }
    handleRatingChange = e => {
        this.setState({rating: e.target.value});
    }
    handleAdultChange = e => {
        this.setState({adult: e.target.value});
    }
    handleTypeChange = e => {
        this.setState({type_id: e.target.value});
    }


    render() {
        return (
            <div>
                <img className='create-title' src='../add-game.png' alt='gamedetails'/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Game Name: 
                            <input onChange={this.handleNameChange} value={this.state.name}/>
                        </label>
                        
                        <label>
                            Game Rating: 
                            <input type='number'onChange={this.handleRatingChange} value={this.state.rating}/>
                        </label>
                        <label>
                            Is Game rated M?: 
                            <input type="checkbox" onChange={this.handleAdultChange} value='true' />
                                                            
                        </label>
                        <label>
                            Game Type: 
                            <select onChange={this.handleTypeChange} value={this.state.gameType}>
                                {
                                    this.state.gameTypes.map((gameType) => <option value={gameType.id}>{gameType.type}</option>)
                                }
                                

                            </select>
                        </label>
                        <button>Add Game!</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
