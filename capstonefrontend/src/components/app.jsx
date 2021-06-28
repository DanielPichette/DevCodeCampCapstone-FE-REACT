import React, { Component } from 'react';
import './app.css'
import Header from './Header/header';
import Navigation from './NavigationBar/navigation';

class App extends Component {
    state = { }
    render() {
        return (
            <div className="MainWrapper">
                
                <div>
                    <Header/>
                </div>
                <div>
                    <Navigation/>
                </div>

            </div>
        );
    }
}
export default App;