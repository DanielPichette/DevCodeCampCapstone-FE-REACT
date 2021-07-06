import React from 'react';
import './homeBrowse.css';
import {Link} from 'react-router-dom';


function HomeBrowse(props){
    return (
            <div class='HomeBrowseBody'>
                <div className="BrowsePet">
                <Link to="/PetView" style={{color:"white"}}>
                        Browse Pets
                    </Link>                    {/* <img src="https://lh4.googleusercontent.com/proxy/betMKwSz3pf61Nc6gfoyF7o186LjzjP9iaS_XJAiGDoMdZkIcEgybhBDDzsN7EUEI-KCVr34z3nIJ-zLHdKTdQNx93lc9FjZIpsW1-U5NvguUsm2Z4KzldPsgjl8vSgEzVq4trpNUa3YAA=s0-d" alt=""/> */}
                    {/* <img src="https://www.petinsurancereview.com/sites/default/files/inline-images/homepage%2001_0.png" alt=""/> */}
                  
                </div>

                <div className="BrowseLocal">
                    Browse Local
                    {/* <img src="https://img-premium.flaticon.com/png/512/2936/2936504.png?token=exp=1624916094~hmac=583c5826bf533bf666ddf7671cbbebba" alt="" height="30%"/> */}
                </div>

                <div className="BrowsItem">
                    Browse Items
                    {/* <img src="https://i0.wp.com/petfactory.com/wp-content/uploads/2017/04/Plush.png?w=700&ssl=1" alt="toys" width="60%"/> */}
                </div>
         
            </div>
    );

}
 
export default HomeBrowse;