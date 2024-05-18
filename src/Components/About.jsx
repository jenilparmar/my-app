import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <center>
        <div className="container">
          <div className="card fade-in-bottom">
            <div className="photo1" id="c1"></div>
            <br />
            <div className="info">
              <center>
                <h4>Education</h4>
              </center>
              <ul className="l">
                <li>Bachelor of Technology <br />(B.Tech) in CSE</li>

                <li>IIIT Vadodara</li>

                <li>Graduation: July,2027</li>
              </ul>
            </div>
          </div>
          <div className="card fade-in-bottom">
            <div className="photo1" id="c2"></div>
            <br />
            <div className="info">
              <center>
                <h4>Projects</h4>
              </center>
              <ul className="l">
                <li>
                  <a href="https://restauratn-7.onrender.com" target="#" id="g">Restaurant Website</a>
                </li>
                <li>
                  <a href="https://jenilparmar.github.io/TicketBooking/" target="#"> booking Menagement <br /> System</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="card fade-in-bottom">
            <div className="photo1" id="c3"></div>
            <br />
            <div className="info" id="big">
              <center>
                <h4>Achievement</h4>
              </center>
              <ul>
                <li className="wrap">
                First Rank in College Web Development Competition
                </li>
                <li className="wrap">
                LeetCode Mastery: Cleared 170 LeetCode questions
                </li>
              </ul>
              
            </div>
          </div>
          <div className="card fade-in-bottom">
            <div className="photo1" id="c4"></div>
            <br />
            <div className="info">
              <center>
                <h4>Memories</h4>
                <br />
                <br />
                <a href="https://drive.google.com/drive/folders/1O_FiRE1XNNChGG7bz4I6drzHeIdiGkmU?usp=drive_link" target="#" id="f">
                  Click me
                </a>
              </center>
            </div>
          </div>
        </div>
        <br />
      </center>
    </>
  );
}
