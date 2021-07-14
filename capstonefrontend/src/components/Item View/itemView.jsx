import React, { Component } from 'react';
import {Link} from  'react-router-dom';
//import axios from 'axios';

class ItemView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h2 style={{margin:"0px"}}>Items</h2>
                
                <h4 style={{margin:"0px"}}>Cats:</h4>
                <div className="CatBar">
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="cat"}).map((pet)=>{
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
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="dog"}).map((pet)=>{
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
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="reptile"}).map((pet)=>{
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
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="small animal"}).map((pet)=>{
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
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="bird"}).map((pet)=>{
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
                    
                    {this.props.state.allItems.filter(function (el) {
                    return el.animal=="fish"}).map((pet)=>{
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
                <div>
                <Link to="/CreateItemListing" style={{color:"white"}}>
                            <button >Create Listing</button>
                    </Link>
                </div>

            </div>
             
         );
    }
}

export default ItemView;