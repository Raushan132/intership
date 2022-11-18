import React from "react";
import phone_logo from "../images/phone-logo.png";
import director_img from "../images/director.jpg";

const About=()=>{
    return (
        <>
            <div className="content">
			<div className="about comp_content">
				<div className="about_img"> <img src={phone_logo} alt="comp_logo"/></div>
				<div className="content-box">
					<h1>About the Company:</h1>
					<div className="comp_data">
						Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Aliquam laborum sapiente laboriosam nulla ipsam similique omnis, sed, voluptates accusamus, quo temporibus? Et quia eligendi illum, repudiandae dicta veritatis! Reprehenderit, minus.
						Aliquam non ut ipsum praesentium, aspernatur minima omnis rem, necessitatibus, pariatur, inventore corrupti. Optio repudiandae, mollitia quidem nostrum soluta accusantium earum, ab, temporibus dolores sed, odio neque molestias quisquam voluptatibus.
					</div>
				</div>
			</div>

			<div className="about direct_content">
				
				<div className="content-box">
					<h1>Director of the Company:</h1>
					<div className="comp_data">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

					</div>
				</div>
				<div  className="about_img"><img src={director_img} alt="director-img" /></div>
			</div>
		
		</div>
        </>
    );
};
export default About