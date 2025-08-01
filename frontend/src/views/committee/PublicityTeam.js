import "./PublicityTeam.css";
import Thisuri from "../../images/committee members/publicity/Thisuri Peiris.png";
import Niruna from "../../images/committee members/publicity/Niruna Shyamal.png";
import Thisula from "../../images/committee members/publicity/Thisula Lewhan.png"

const PublicityTeam = () => {
  return (
    <div className="membership-text">
      <div className="subcommittees-text">
        <div className="publicity-team-frame">
 
          <h3 className="publicity-team">PUBLICITY TEAM</h3>
        </div>
        {/* <div className="lorem-ipsum-dolor-container2">
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
      </div>
      <div className="niumi-halmillawewa-leader">
        <div className="membership-development-team-te">
          <div className="leadership-team">
            <div className="rectangle-parent3">
              <div className="frame-child4" />
              <img
                className="lead-pic-icon1"
                loading="eager"
                alt=""
                src={Thisuri}
              />
            </div>
            <b className="niumi-halmillawewa-leader-container">
              <p className="niumi-halmillawewa">Thisuri Peiris</p>
              <p className="leader1">Leader</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader">
            <div className="thiruni-member">
              <div className="thiruni-member-child" />
              <img
                className="member-icon3"
                loading="eager"
                alt=""
                src={Niruna}
              />
            </div>
            <b className="anjula-hirimuthugoda-member-container">
              <p className="anjula-hirimuthugoda">Niruna Karunarathne </p>
              <p className="member3">Member</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader1">
            <div className="rectangle-parent4">
              <div className="frame-child5" />
              <img
                className="member-icon4"
                loading="eager"
                alt=""
                src={Thisula}
              />
            </div>
            <b className="mithila-samarawickrama-member-container">
              <p className="mithila-samarawickrama">Thisula Lewhan </p>
              <p className="member4">Member</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicityTeam;
