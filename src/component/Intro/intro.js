import React from "react";
import './intro.css';
import{Link} from 'react-scroll'
import btnImg from '../../assets/hire_me.jpeg'
import bg from '../../assets/saurabh profile1.jpg'
const Intro=()=>{
    return(
       <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm 
            <span className="introName"> Saurabh</span> <br></br> Full Stack Developer
            </span>
            <p className="introPara">A self - motivated technical enthusiast pursuing Bachelor’s of Technology in Information Technology seeking a<br></br> challenging position where I can expand my knowledge with an opportunity of progressive personal and <br></br>professional
            growth.</p>
         <Link>
         <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me
         </button>
         </Link>
        </div>

        <img src={bg} alt="Profile" className="bg"/>
       </section>
    )
}
export default Intro;