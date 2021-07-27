import React, { Component } from 'react';
import PetView from '../PetsView/petsview';
import './searchview.css';
//import axios from 'axios';

class SearchView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h3 style={{margin:"0px"}}>Results matching {this.props.state.searchinput}</h3>
                <br/>
                <br/>
                
                <h2 style={{margin:"0px"}}>Pets:</h2>

                <div className="CatBar">
                {this.props.state.searchresults.map((pet)=>{
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
                <br/><br/>
                <h2 style={{margin:"0px"}}>Items:</h2>
                <div className="CatBar">
                {this.props.state.itemsearchresults.map((pet)=>{
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

            </div>
             
         );
    }
}

export default SearchView;