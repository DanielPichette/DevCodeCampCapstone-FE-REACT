import React from 'react';
import './homeBrowse.css';
import {Link} from 'react-router-dom';


function HomeBrowse(props){
    return (
            <div class='HomeBrowseBody'>
                <div className="BrowsePet">
                    <Link to="/PetView" style={{color:"white"}}>
                            Browse Pets
                    </Link>
                </div>

                <div className="BrowseLocal">
                    Browse Local
                </div>

                <div className="BrowsItem">
                    Browse Items
                </div>
         
            </div>
    );

}
 
export default HomeBrowse;