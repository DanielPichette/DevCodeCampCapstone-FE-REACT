import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import Home from './Home/home';
import Register from './Register/register';
import Navigation from './NavigationBar/navigation';
import Header from './Header/header';
import UpdateProfile from './update Profile/updateprofile';
import ItemView from './VItem View/itemView';
import Login from './Login/login';
import PetView from './PetsView/petsview';
import ViewListing  from './View listing/viewListing'
import Resources from './Resources/resources';
import Lost from './LostPet/lostpets';
import SearchView from './SearchView/searchview';
import ProfileView from './ProfileView/profile';
import CreatePetListing from './CreatePetLIsting/CreatePetListing';
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
        PetView:"",
        userListings:[]
        
    }
    componentDidMount(){
        this.getUsers()
        this.getItems()
        this.getPetListings()
        this.getAllLost()
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

    getAllLost = async() => {
        let lostPets = await axios.get(`http://127.0.0.1:8000/LostPets/`)
        console.log(lostPets)
        this.setState({
            allLost: lostPets.data,
        })
        console.log('Lost Pets:',this.state.allLost)
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
                                    <Lost lostpets={this.state.allLost}/>
                                </Route>
                                <Route path="/UpdateProfile" component={UpdateProfile}>
                                    <UpdateProfile/>
                                </Route>
                                <Route path="/PetView" component={PetView}>
                                    <PetView/>
                                </Route>
                                <Route path="/Login" component={Login}>
                                    <Login/>
                                </Route>
                                <Route path="/CreatePetListing" component={CreatePetListing}>
                                    <CreatePetListing/>
                                </Route>
                                <Route path="/Resources" component={Resources}>
                                    <Resources/>
                                </Route>
                                <Route path="/listing" component={ViewListing}>
                                    <  ViewListing/>
                                </Route>
                                <Route path="/ItemView" component={ItemView}>
                                    <  ItemView/>
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