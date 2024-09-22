import "./EditorialTeam.css";
import abiru from "../../images/committee members/FB_IMG_1676741899270 - Abiru Abayapala-modified.png";
import tharindu from "../../images/committee members/Tharindu Bandara - BookOfPanda-modified.png";
import chamindu from "../../images/committee members/dilneth-modified.png";
import dasith from "../../images/committee members/Dasith_Editorial_Team_Member - Dasith Sathpura-modified.png"

const EditorialTeam = () => {
  return (
    <div className="editorialteamframe-wrapper">
      <div className="editorialteamframe">
        <div className="editorialteamframe1">
          <div className="framegroup">
            <h3 className="editorial-team">EDITORIAL TEAM</h3>
          </div>
        </div>
        {/* <div className="lorem-ipsum-dolor-container1">
          <b>Lorem ipsum dolor sit amet</b>
          <span>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </span>
        </div> */}
        <div className="publicity-frame">
          <div className="lead-pic-member">
            <div className="anjula-member">
              <div className="anjula-member-child" />
              <img
                className="lead-pic-icon"
                loading="eager"
                alt=""
                src={abiru}
              />
            </div>
            <b className="abiru-abayapala-leader-container">
              <p className="abiru-abayapala">Abiru Abayapala</p>
              <p className="leader">Leader</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={chamindu}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Chamindu Dilneth</p>
              <p className="member">Member</p>
            </b>
          </div>
          <div className="lead-pic-member2">
            <div className="rectangle-parent1">
              <div className="frame-child2" />
              <img
                className="member-icon1"
                loading="eager"
                alt=""
                src={dasith}              />
            </div>
            <b className="dasith-sathpura-member-container">
              <p className="dasith-sathpura">Dasith Sathpura</p>
              <p className="member1">Member</p>
            </b>
          </div>
          <div className="lead-pic-member3">
            <div className="rectangle-parent2">
              <div className="frame-child3" />
              <img
                className="member-icon2"
                loading="eager"
                alt=""
                src={tharindu}
              />
            </div>
            <b className="tharindu-bandara-member-container">
              <p className="tharindu-bandara">Tharindu Bandara</p>
              <p className="member2">Member</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialTeam;
