import "./LogisticTeam.css";
import Linal from "../../images/committee members/logistics/linal.png";
import HATHIM from "../../images/committee members/logistics/HAATHEEM.png"
import Kusal from "../../images/committee members/logistics/Kusal.png"

const LogisticsTeam = () => {
    return(
        <div className="membership-development-team-fr">
      <h3 className="membership-development-team mx-auto">
        LOGISTICS TEAM
      </h3>
      <div className="publicity-frame1">
        {/* <div className="lorem-ipsum-dolor-container4">
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
        <div className="leader-frame-parent">
          <div className="leader-frame">
            <div className="rectangle-parent8">
              <div className="frame-child9" />
              <img
                className="lead-pic-icon3"
                loading="eager"
                alt=""
                src={Linal}
              />
            </div>
            <b className="pasan-senarath-leader-container">
              <p className="pasan-senarath1">Linal de zoysa</p>
              <p className="leader3">Leader</p>
            </b>
          </div>
          <div className="leader-frame1">
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <img
                className="member-icon7"
                loading="eager"
                alt=""
                src={HATHIM}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">HATHIM M.J.M</p>
              <p className="member7">Member</p>
            </b>
          </div>
          <div className="leader-frame1">
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <img
                className="member-icon7"
                loading="eager"
                alt=""
                src={Kusal}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Kusal Senevirathna </p>
              <p className="member7">Member</p>
            </b>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LogisticsTeam;