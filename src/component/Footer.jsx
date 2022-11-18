import React from "react";
import {Link } from "react-router-dom";
import messenger from "../icons/messenger.svg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import whatsapp from "../icons/whatsapp.svg";

const Footer= ()=>{
    return (
        <>
        <footer>
			<div className="footer_data">
				<div className="socal_data">
					<h2 className="footer_heading">Socal Media</h2>
					<div className="footer_icons">
						<Link to="#"><img src={messenger} alt="ico"/></Link>
						<Link to="#"><img src={whatsapp} alt="ico"/></Link>
						<Link to="#"><img src={twitter} alt="ico"/></Link>
						<Link to="#"><img src={insta} alt="ico"/></Link>
					</div>
				</div>
				<div className="Action_data">
					<h2 className="footer_heading">Quick Action</h2>
					<div className="links">
						<ul>
							<li><Link to="/about">About</Link></li>
							<li><Link to="#" >Policy</Link></li>
							<li><Link to="/contact">Contact us</Link></li>
						</ul>
					</div>
				</div>
				<div className="Location_data">
					<h2 className="footer_heading">Location</h2>
					<div className="loc_data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
				</div>
			</div>
			<div className="copy">&copy CopyRights | All rights reserved 2022</div>
		</footer>
        </>
    );
};

export default Footer;