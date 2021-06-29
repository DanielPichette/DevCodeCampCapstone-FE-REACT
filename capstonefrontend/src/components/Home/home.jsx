import React, { Component } from 'react';
import Header from '../Header/header';
import Navigation from '../NavigationBar/navigation';
import Welcome from '../Welcome/welcome';
import HomeBrowse from '../HomeBrowse/homeBrowse';
import './home.css';

class Home extends Component {
    state = { 
        tbd:"tbd",
     }
    render() { 
        return ( 
            <div className="MainWrapper">

                <div>
                    <Header/>
                </div>
                <div>
                    <Navigation/>
                </div>
                <div>
                    <Welcome/>
                </div>

                <div>
                    <HomeBrowse/>
                </div>

                <div className="SearchByAnimalHeader">
                    <h2>Search by Animal</h2>
                </div>
                <div className="AnimalCircleWrapper">
                    <div className="CircleSection">
                    <div className="CircleImage">
                            img
                        </div>
                        <h3>Cats</h3>
                    </div>

                    <div className="CircleSection">
                        <div className="CircleImage">
                            img
                        </div>
                        <h3>Dogs</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            img
                        </div>
                        <h3>Reptiles</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            img
                        </div>
                        <h3>Small Animals</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            img
                        </div>
                        <h3>Birds</h3>
                    </div>

                    <div className="CircleSection">
                    <div className="CircleImage">
                            img
                        </div>
                        <h3>Fish</h3>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Home;