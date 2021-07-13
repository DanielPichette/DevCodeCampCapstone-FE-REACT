import React, { Component } from 'react';
import './petsview.css';
import {Link} from  'react-router-dom';
//import axios from 'axios';

class PetView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h2 style={{margin:"0px"}}>PETS</h2>
                
                <h4 style={{margin:"0px"}}>Cats:</h4>
                <div className="CatBar">
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                        
                            <img className="CatBarListingImage" src="https://images.pexels.com/photos/674572/pexels-photo-674572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} onClick={(event)=>this.props.viewpet(1)}/>
                            
                        </div>
                        <Link to="/listing" >
                            <div className="CatBarListingName">Name</div>
                        </Link>
                    </div>
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="cat"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                        <img onClick={this.props} src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    

                </div>

                <h4 style={{margin:"0px"}}>Dogs:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="dog"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                        <img src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    

                </div>
                <h4 style={{margin:"0px"}}>Reptiles:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="reptile"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    

                </div>
                <h4 style={{margin:"0px"}}>Small Animals:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="small animal"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    

                </div>
                <h4 style={{margin:"0px"}}>Birds:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="bird"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}
                    

                </div>
                <h4 style={{margin:"0px"}}>Fish:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allPets.filter(function (el) {
                    return el.type=="fish"}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} alt=""/>
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

export default PetView;