import React from "react";
import "./main.css"
import lightImg from "./images/PNG/light.png";
import missionImg from "./images/PNG/mission.png";
import vissionImg from "./images/PNG/vission.png";
import cover from "./images/cover.png";

export const About = () => {
  return (
    <div className="allAbout">
      <div className="main_about">
        <img src={cover} alt="cover" className="image_1"  />
        <div className="content_about">
          <h1 className="h_about">About Us</h1>
          <div className="main_content">
            <div className="main_c1">
              <img src={lightImg} alt="mission" className="images" style={{"marginTop": "15%"}}/>
              <p>
                IEEE is the world’s largest professional association dedicated
                to advancing technological innovation and excellence for the
                benefit of humanity. IEEE and its members inspire a global
                community through IEEE’s highly cited publications, conferences,
                technology standards, and professional and educational
                activities.
              </p>
            
              <div className="about_icons"></div>
            </div>
            <div className="main_c2">
              <div className="sub_1">
                <img src={vissionImg} alt="mission" className="images"/>
                <p>
                  OUR VISION is to be essential for the global technical
                  community and to technical professionals everywhere, and be
                  universally recognized for the contributions of technology and
                  of technical professionals in improving global conditions.
                </p>
              </div>
              <div className="sub_1">
                <img src={missionImg} alt="mission"  className="images"/>
                <p>
                  MISSION of IEEE - IEEE’s core purpose is to foster
                  technological innovation and excellence for the benefit of
                  humanity.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
