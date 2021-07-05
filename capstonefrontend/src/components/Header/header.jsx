import React, { Component} from 'react';
import './header.css';

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
                    <form className='HeaderSearchForm'>
                        <input type="text" name="searchbar" className='SearchBar' placeholder="Search" />
                    </form>
                </div>

                <div className='HeaderAccount'>

                    <h1>Account</h1>
                    <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="icon"/>

                </div>
            </div>
         );
    }
}
 
export default Header;