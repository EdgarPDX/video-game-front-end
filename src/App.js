import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import GameLibrary from './game-library.js';
import DetailPage from './detail-page.js';
import CreatePage from './create-page.js';
import Header from './Header.js';

export default class App extends Component {
    render() {
        return (
            <main>
                <Router>
                  <header>
                    <Header />
                      <div className='links'>
                        <Link to = '/'><img className='img-link' src='./home.png' alt='home'/></Link>
                        <Link to='/addgame'><img className='img-link' src='./addgame.png' alt='add-game'/></Link>
                      </div>
                    
                    </header>
                  
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <GameLibrary {...routerProps} />} 
                        />
                        <Route 
                            path="/addgame" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                          path="/detail/:id" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </main>
        )
    }
}
