import React, { Component } from 'react';
import Header from './Header/header';

class App extends Component {
    state = { }
    render() {
        return (
            <div className="MainWrapper">
                <div>
                    <Header/>
                </div>

            </div>
        );
    }
}
export default App;