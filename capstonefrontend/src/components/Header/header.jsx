import React, { Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = { 
        tbd:"tbd",
     }
    render() { 
        return ( 
            <div className='HeaderWrapper'>

                <div className='HeaderLogo'>
                    <h1>LeashLocal</h1>
                </div>
                <div className="HeaderIMG">
                <img className="Logo" src="https://image.flaticon.com/icons/png/512/2934/2934951.png" alt=""/>

                </div>

                <div className='HeaderSearch'>
                    <Link to="/SearchResults">
                    <div className='HeaderSearchForm'>
                        <input type="text" name="searchinput" className='SearchBar' placeholder="Search" onChange={(event) => this.props.handleChange(event)}/>
                    </div>
                    </Link>
                </div>

                <div className='HeaderAccount'>
                <Link to="/Profile">
                        <h1 class="NavButton" style={{color:"black"}}>Account</h1>
                    </Link>

                    <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="icon"/>

                </div>
            </div>
         );
    }
}
 
export default Header;