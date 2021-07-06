import React from 'react';
import './navigation.css'
import { Link } from 'react-router-dom';



function Navigation(props){
    return (
            <div class='NavigationBody'>
                <div>
                    <Link to="/">
                        <h3 class="NavButton">Home</h3>
                    </Link>
                </div>

                <div>
                    <Link to="/PetView">
                        <h3 class="NavButton">Pets</h3>
                    </Link>
                </div>

                <div>
                    <Link to="/ItemView">
                        <h3 class="NavButton">Items</h3>
                    </Link>
                </div>

                <div>
                    <h3>About Us</h3>
                </div>

                <div>
                    <Link to="/Lost">
                        <h3 class="NavButton">Lost Pets</h3>
                    </Link>
                </div>

                <div>
                    <Link to="/Resources">
                            <h3 class="NavButton">Resources</h3>
                    </Link>
                </div>

                <div>
                    <Link to="/Login">
                        <h3 class="NavButton">Login</h3>
                    </Link>
                </div>

                <div>
                    <Link to="/Register">
                        <h3 class="NavButton">Register</h3>
                    </Link>
                </div>

            </div>
    );

}
 
export default Navigation;