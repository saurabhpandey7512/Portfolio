import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio1.jpeg';
import Portfolio2 from '../../assets/portfolio2.jpeg';
import Portfolio5 from '../../assets/portfolio5.jpeg';
import Portfolio7 from '../../assets/portfolio.7.jpeg';
const Works=()=>{
return(
   <section id="works">

<h2 id="workTitle"> My Portfolio</h2>
<span className="worksDesc"> I take pride  paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieves thier goals and create a strong online presence </span>
  <div className="worksImgs">
  
  <img src={Portfolio1} alt="Portfolio1" className="worksImg"/>
  <img src={Portfolio2} alt="Portfolio2" className="worksImg"/>
  <img src={Portfolio5}alt="Portfolio5" className="worksImg"/>
  <img src={Portfolio7} alt="Portfolio7" className="worksImg"/>

  </div>
  <button className="workbtn">see more</button>
   </section>
);
}
export default Works;