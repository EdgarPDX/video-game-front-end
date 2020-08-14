import React, { Component } from 'react'
import { addGame } from './videogames-api.js'
import './create.css';

export default class CreatePage extends Component {
    state = {
        name:'blank',
        rating: 5,
        adult: false,
        type: 'racing',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addGame({
            name: this.state.name,
            rating: this.state.rating,
            adult: this.state.adult,
            type: this.state.type,
        });

        this.setState({
            name:'',
            rating: '',
            adult: '',
            type: '',
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
        this.setState({type: e.target.value});
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
                            Game Type: 
                            <select onChange={this.handleTypeChange} value={this.state.type}>
                                <option value='Adventure'>Adventure</option>
                                <option value='Racing'>Racing</option>
                                <option value='Open World'>Open World</option>
                                <option value='Multiplayer'>Multiplayer</option>

                            </select>
                        </label>
                        <label>
                            Game Rating: 
                            <input type='number'onChange={this.handleRatingChange} value={this.state.rating}/>
                        </label>
                        <label>
                            Is Game rated M?: 
                            <input type="checkbox" onChange={this.handleAdultChange} value='true' />
                                                            
                        </label>
                        
                        <button>Add Game!</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
