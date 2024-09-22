import "./MembershipDevTeam.css";
import mahdy from "../../images/committee members/Mahdy_Sub Comittee Lead - Mahdy Abdullah-modified.png"
import kavindri from "../../images/committee members/Kavindri Perera-modified.png"
import owadi from  "../../images/committee members/Owadi_member - Owadi Bandara-modified.png"

const MembershipDevTeam = () => {
  return (
    <div className="membership-dev-team">
      <h3 className="membership-development-team">
        MEMBERSHIP DEVELOPMENT TEAM
      </h3>
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        {/* <div className="lorem-ipsum-dolor-container3">
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
        <div className="member-anjula">
          <div className="member-mithila">
            <div className="lead-pic-anjula">
              <div className="rectangle-parent5">
                <div className="frame-child6" />
                <img
                  className="lead-pic-icon2"
                  loading="eager"
                  alt=""
                  src={mahdy}
                />
              </div>
              <b className="mahdy-abdullah-nawfar-container">
                <p className="mahdy-abdullah-nawfar">Mahdy Abdullah Nawfar</p>
                <p className="leader2">Leader</p>
              </b>
            </div>
            <div className="lead-pic-anjula1">
              <div className="rectangle-parent6">
                <div className="frame-child7" />
                <img
                  className="member-icon5"
                  loading="eager"
                  alt=""
                  src={owadi}
                />
              </div>
              <b className="thiruni-bandara-member-container">
                <p className="thiruni-bandara">Owadi Bandara</p>
                <p className="member5">Member</p>
              </b>
            </div>
            <div className="lead-pic-mahdy">
              <div className="rectangle-parent7">
                <div className="frame-child8" />
                <img
                  className="member-icon6"
                  loading="eager"
                  alt=""
                  src={kavindri}
                />
              </div>
              <b className="kavindri-perera-member-container">
                <p className="kavindri-perera">Kavindri Perera</p>
                <p className="member6">Member</p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDevTeam;
