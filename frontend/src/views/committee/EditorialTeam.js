import "./EditorialTeam.css";
import Chamika from "../../images/committee members/editors/Chamika.png";
import Kavinga from "../../images/committee members/editors/Kavinga.png";
import Isira from "../../images/committee members/editors/Isira.png";

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
                src={Chamika}
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
                src={Isira}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Isira Sahanjith </p>
              <p className="member">Member</p>
            </b>
          </div>
          <div className="lead-pic-member1">
            <div className="frame-div">
              <div className="frame-child1" />
              <img
                className="member-icon"
                loading="eager"
                alt=""
                src={Kavinga}
              />
            </div>
            <b className="chamindu-dilneth-member-container">
              <p className="chamindu-dilneth">Kavinga Aluvihare </p>
              <p className="member">Member</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialTeam;
