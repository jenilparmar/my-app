import React from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <>
    
      <center>
        <div className="containers">

         <center>
         
          <div className="naam">Web Developement</div>
            {/* <div className="thin"></div> */}
         
         </center>
          <div className="cards fade-in-bottom">
            <div className="skill" id="html"></div>
            <div className="skill" id="css"></div>
            <div className="skill" id="js"></div>
          </div>
          <div className="cards fade-in-bottom">
            <div className="skill" id="react"></div>
            <div className="skill" id="node"></div>
            <div className="skill" id="python"></div>
          </div>
          <div className="cards fade-in-bottom">
            <div className="skill" id="Express"></div>
            <div className="skill" id="mongodb"></div>
            <div className="skill" id="Flask"></div>
          </div>
          <center>
         
          <div className="naame">Data Structures and Algorithms</div>
          
          </center>
          <div className="cards fade-in-bottom">
            <div className="skill" id="c"></div>
            <div className="skill" id="java"></div>
            <div className="skill" id="cpp"></div>
          </div>
        </div>
      </center>
      <div className="lm"></div>
    </>
  );
}
