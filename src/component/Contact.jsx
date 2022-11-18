import React from "react";
import banner from "../images/banner.png";
import map from "../images/map.png";



const Contact =()=>{
    return (
        <>
            <div className="content">
			<div className="contact_info">
				<div className="banner"><img src={banner} alt="banner_img"/></div>
				<div className="contact_form">
					<h1><u>Contact us</u></h1>
					<form className="form-group">
							<input type="email" className="txt-box txt_email" name="email" placeholder="E-mail" /><br/>
							<input type="text" className="txt-box txt_sub" name="subject" placeholder="Subject" /><br/>
							<input type="text" className="txt-box txt_mess" name="message" placeholder="Message" /><br/>
							<input type="submit"  value="Send" className="btn btn-send" />

					</form>
					
				</div>

			</div>
			 <div className="contact_map">
				<img src={map} alt="map"/>
			</div> 
		
		</div>
        </>
    );
};

export default Contact;