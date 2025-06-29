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
              <p className="abiru-abayapala">Chamika Lakshan</p>
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
        </div>
      </div>
    </div>
  );
};

export default EditorialTeam;
