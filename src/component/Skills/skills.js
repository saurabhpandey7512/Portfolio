import React from 'react'
import './skills.css';
import UIDesign from'../../assets/ui-design.jpeg';
import AppDesign from '../../assets/app-design.png';

const Skills=()=>{
    return(
       <section id='skills'>
        
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passinate with Full Stack Developern</span>
        <div className='skillBars'>
             <div className='skillBar'>
               <img src={UIDesign} alt='UIDesign' className="skillBarImg"/>
                  <div className='skillBarText'>
                     <h2>UI/UX Design</h2> 
                     <p> this is demo text , you can write your own content</p>
                  </div>
             </div>

             <div className='skillBar'>
               <img src={AppDesign} alt='AppDesign' className="skillBarImg"/>
                  <div className='skillBarText'>
                     <h2> App Design</h2> 
                     <p>This is demo text , you can write your content here </p>
                  </div>
             </div>

        </div>
         </section>
    );
}
export default Skills;