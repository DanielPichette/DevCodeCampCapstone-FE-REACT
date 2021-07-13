import React, { Component } from 'react';
import Header from '../Header/header';
import Navigation from '../NavigationBar/navigation';
import Welcome from '../Welcome/welcome';
import HomeBrowse from '../HomeBrowse/homeBrowse';
import './home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = { 
        tbd: "tbd",
     }

    render() { 
        return ( 
            <div className="MainWrapper">

                <div>
                    <br/>
                    <Welcome/>
                </div>
                <br/>

                <div class='HomeBrowseBody'>
                <div className="BrowsePet">
                    <Link to="/PetView" style={{color:"white"}}>
                            Browse Pets
                    </Link>
                </div>

                <div className="BrowseLocal" onClick={()=>this.props.getlocal()}>
                    Browse Local
                </div>

                <div className="BrowsItem">
                    Browse Items
                </div>
         
            </div>
                <br/>

                <div className="SearchByAnimalHeader">
                    <h2>Search by Animal</h2>
                </div>
                <div className="AnimalCircleWrapper">
                    <div className="CircleSection">
                    <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/4867/4867184.png" alt=""/>
                        </div>
                        <h3>Cats</h3>
                    </div>

                    <div className="CircleSection">
                        <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/4867/4867176.png" alt=""/>
                        </div>
                        <h3>Dogs</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/836/836053.png" alt=""/>
                        </div>
                        <h3>Reptiles</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/836/836080.png" alt="" />
                        </div>
                        <h3>Small Animals</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/836/836062.png" alt=""/>
                        </div>
                        <h3>Birds</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            <img src="https://image.flaticon.com/icons/png/512/835/835757.png" alt=""/>
                        </div>
                        <h3>Fish</h3>
                    </div>
                </div>
                <br/>
                <div className="CatBar">
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src="https://image.flaticon.com/icons/png/512/4867/4867184.png" alt="" style={{maxWidth:"200px", maxHeight:"200px"}}/>
                        </div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="cat"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} onClick={()=>this.props.viewpet(pet)}/>
                        </div>
                        <Link to="/listing" style={{color:"white"}}>
                            <div className="CatBarListingName">{pet.name}</div>
                        </Link>
                    </div>
                        )
                        })}



                    

                </div>
                <br/>
                <div className="DogBar">
                    <div className="DogBarListing">
                        <div className="DogBarListingImage">
                        <img src="https://image.flaticon.com/icons/png/512/4867/4867176.png" alt="" style={{maxWidth:"200px", maxHeight:"200px"}}/>
                        </div>
                        <div className="CatBarListingName">Name</div>
                        
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="dog"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                        <img src={pet.pictures}/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}

                </div>
                <br/>
                <div className="ItemBar">
                    <div className="ItemBarListing">
                        <div className="ItemBarListingImage">
                        <img src="https://image.flaticon.com/icons/png/512/4867/4867184.png" alt="" style={{maxWidth:"200px", maxHeight:"200px"}}/>
                        </div>
                        <div className="ItemBarListingName">Name</div>
                    </div>
                    {this.props.state.allItems.map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div><div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>


                </div>

            </div>
         );
    }
}
 
export default Home;