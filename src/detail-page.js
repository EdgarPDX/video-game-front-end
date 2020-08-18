import React, { Component } from 'react'
import { fetchGame, removeGame, updateGame, getGameTypes } from './videogames-api.js'
import './Detail.css';

export default class DetailPage extends Component {
    state = {
        game: {},
        name: 'blank',
        rating: 5,
        adult: false,
        type_id: 1,
        gameTypes:[],
    }

    componentDidMount = async () => {
        const data = await fetchGame(this.props.match.params.id)
        const typeData = await getGameTypes();
        const matchingType = typeData.body.find(gametype => gametype.type = data.body.gametype_type);
        console.log(typeData.body)
        console.log(matchingType)
        this.setState({
            gameTypes:typeData.body,
            game: data.body,
            name: data.body.name,
            rating: data.body.rating,
            adult: data.body.adult,
            gametype: matchingType.id
        })
        
    }
   
    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateGame(
                this.props.match.params.id,
                {
                    name: this.state.name,
                    rating: this.state.rating,
                    adult: this.state.adult,
                    type_id: this.state.type_id,
                });

                const updatedGame = await fetchGame(this.props.match.params.id)

                this.setState({
                    name: '',
                    rating: 5,
                    adult: false,
                    type_id: 1,
                    game: updatedGame.body,
                });
            
        } catch (e){
            console.log(e.message)
        }
    }

    handleNameChange = e =>{
        this.setState({ name: e.target.value})
    }

    handleRatingChange = e =>{
        this.setState({ rating: e.target.value})
    }
    handleAdultChange = e =>{
        this.setState({ adult: e.target.value})
    }
    handleTypeChange = e =>{
        this.setState({ type_id: e.target.value})
    }

    handleDelete = async () =>{

        await removeGame(this.props.match.params.id);
    
        this.props.history.push('/')
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
                    <li key='first'><h3>My Rating: </h3>{this.state.game.rating} STARS</li>
                    <li key='second'><h3>Adult: </h3>{this.state.game.adult? 'HELL YES': 'Heck No'}</li>
                    <li key='third'><h3>Type: </h3>{this.state.game.gametype_type}</li>
                </ul>

                <h2>Update Game</h2>
                    <form onSubmit ={this.handleSubmit}>
                        <label>
                            Update Name:
                            <input onChange={this.handleNameChange} value={this.state.name}/>
                        </label>
                        <label>
                            Update Rating:
                            <input onChange={this.handleRatingChange} value={this.state.rating}/>
                        </label>
                        <label>
                            Update Adult Rating?:
                            <input type='checkbox' onChange={this.handleAdultChange} value={this.state.adult}/>
                        </label>
                        <label>
                            Update Game Type:
                            <select onChange={this.handleTypeChange} value={this.state.gameType}>
                                {
                                this.state.gameTypes.map((gametype) => <option value={gametype.id}>{gametype.type}</option>)
                                }
                            </select>
                        </label>
                        <button>Update Game</button>
                    </form>
                    <button onClick={this.handleDelete}>DELETE GAME</button>
            </div>
        )
    }
}
