import React from "react";
import { NavLink } from "react-router-dom";
import home_ico from "../icons/home.svg";
import info_ico from "../icons/info.svg";
import contact_ico from "../icons/contact.svg";
import lock_ico from "../icons/lock.svg";
const Header=()=>{
    return (
        <>
            <header>
			<nav>
				<div className="logo_name">
					<div className='logo'>logo</div>
					<div className="comp_name">Company Name</div>
				</div>
				<ul>
					<li><NavLink  activeclassname="active" to="/home"><img src={home_ico} alt="ico"/>Home</NavLink></li>
					<li><NavLink  activeclassname="active"  to="/about"><img src={info_ico} alt="ico"/>About</NavLink></li>
					<li><NavLink activeclassname="active"  to="/contact"><img src={contact_ico} alt="ico"/>Contact</NavLink></li>
					<li><NavLink  activeclassname="active" to="/login"><img src={lock_ico} alt="ico"/>Login</NavLink></li>
				</ul>
			</nav>
		
		</header>
        </>
    );
};

export default Header;
