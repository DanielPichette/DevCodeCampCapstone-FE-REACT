import React, { Component } from 'react';
import './app.css'
import Home from './Home/home';
// import Navigation from './NavigationBar/navigation';
// import Welcome from './Welcome/welcome';
// import HomeBrowse from './HomeBrowse/homeBrowse';

class App extends Component {
    state = { }
    render() {
        return (
            <div className="MainWrapper">

                <Home/>
                

            </div>
        );
    }
}
export default App;