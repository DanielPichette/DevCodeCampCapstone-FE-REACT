import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import Home from './Home/home';
import Register from './Register/register';
import Navigation from './NavigationBar/navigation';
import Header from './Header/header';
import Login from './Login/login';
import PetView from './PetsView/petsview';
import Lost from './LostPet/lostpets';
import SearchView from './SearchView/searchview';
import ProfileView from './ProfileView/profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    link
} from "react-router-dom";
//import Welcome from './Welcome/welcome';
// import HomeBrowse from './HomeBrowse/homeBrowse';

class App extends Component {
    state = {
        currentUser: [],
        allItems: [],
        allPets: [],
        allLost:[],
        allUsers:[],
        PetView:""
        
    }
    componentDidMount(){
        this.getUsers()
        this.getItems()
        this.getPetListings()
    }


    getUsers = async() => {
        let users = await axios.get(`http://127.0.0.1:8000/Users/`)
        console.log(users)
        this.setState({
            allPets: users.data,
        })
        console.log('all users:',this.state.allPets)
    };

    getItems = async() => {
        let Items = await axios.get(`http://127.0.0.1:8000/Items/`)
        console.log(Items)
        this.setState({
            allItems: Items.data,
        })
        console.log('all Items:',this.state.allItems)
    };

    getPetListings = async() => {
        let petListings = await axios.get(`http://127.0.0.1:8000/Pets/`)
        console.log(petListings)
        this.setState({
            allPets: petListings.data,
        })
        console.log('all Pets:',this.state.allPets)
    };

    render() {
        return (
            <div className="MainWrapper">
                <Router>
                    <div>
                        <Header/>
                        <Navigation/>
                        <div className="Content">
                            <Switch>
                                <Route path="/" exact component={Home}>
                                    <Home/>
                                </Route>
                                <Route path="/Register" component={Register}>
                                    <Register/>
                                </Route>
                                <Route path="/Profile" component={ProfileView}>
                                    <ProfileView/>
                                </Route>
                                <Route path="/SearchResults" component={SearchView}>
                                    <SearchView/>
                                </Route>
                                <Route path="/Lost" component={Lost}>
                                    <Lost/>
                                </Route>
                            </Switch>
                
                    
                    {/* <Register/> */}
                    {/* <Login/> */}
                    {/* <SearchView/> */}
                    {/* <PetView/> */}
                    {/* <ProfileView/> */}
                    </div>
                    </div>
                </Router>
            </div>

        
            

        );
    }
}
export default App;