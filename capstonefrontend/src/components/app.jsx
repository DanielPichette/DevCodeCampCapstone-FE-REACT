import React, { Component } from 'react';
import './app.css'
import Home from './Home/home';
import Register from './Register/register';
import Navigation from './NavigationBar/navigation';
import Header from './Header/header';
import Login from './Login/login';
import PetView from './PetsView/petsview';
import SearchView from './SearchView/searchview';
import ProfileView from './ProfileView/profile';
//import Welcome from './Welcome/welcome';
// import HomeBrowse from './HomeBrowse/homeBrowse';

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
                {/* <Home/> */}
                {/* <Register/> */}
                {/* <Login/> */}
                {/* <SearchView/> */}
                {/* <PetView/> */}
                <ProfileView/>
                

            </div>
        );
    }
}
export default App;