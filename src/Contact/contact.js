import React from "react";
import './contact.css';
import Adobe from '../../src/assets/adobe.jpg';
import facebook from '../../src/assets/facebook.svg';
import Microsoft from '../../src/assets/microsoft.jpeg';

import Facebook from'../../src/assets/facebook-icon.png';
import Youtube from'../../src/assets/YouTube.avif';
import Twitter from'../../src/assets/twitter.png';
import Instagram from'../../src/assets/instagram.avif';
const Contact=()=>{
    return(
<section id="contactPage">

<div id="clients">
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientDesc">
    I have had yhe opportunity to work with a diserve group of companies .
    Some of the notable companies I have works with include
</p>
<div className="clientImgs">
    <img src={Adobe} alt="adobe" className="clientImg"/>
    <img src={facebook} alt="facebook" className="clientImg"/>
    <img src={Microsoft} alt="Microsoft" className="clientImg"/>
</div>
</div>

<div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDesc"> Please fill out the form below to discuss any work opportunity</span>
<form className="contactForm">
<input type="text" placeholder="enter your Name" className="name"/>
<input type="email " placeholder="enter your Email" className="email"/>
<textarea className="msg" name="message " rows="5" placeholder="Write Your meassage here"></textarea>
<button className="submitBtn" type="submit" value="Send" >Submit</button>

<div className="links">
    <img src={ Facebook} alt="Facebook" className="link"/>
    <img src={Youtube} alt="Youtube" className="link"/>
    <img src={Twitter} alt="Twitter" className="link"/>
    <img src={Instagram} alt="Instagram" className="link"/>
    </div>

</form>

</div>


</section>
    );
}
export default Contact;