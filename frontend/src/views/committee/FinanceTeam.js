import "./FinanceTeam.css";
import maheshi from "../../images/committee members/Maheshi_Finance member - Maheshi De silva-modified.png"
import shanaya from "../../images/committee members/BCFAFCC4-32CA-4740-BF96-F94B007A4479 - Shanaya Pereira-modified.png"
import pasan from "../../images/committee members/Pasan.png";

const FinanceTeam = () => {
  return (
    <div className="membership-development-team-fr">
      <h3 className="membership-development-team">
        FINANCE TEAM
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
                src={pasan}
              />
            </div>
            <b className="pasan-senarath-leader-container">
              <p className="pasan-senarath1">Pasan Senarath</p>
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
                src={shanaya}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Shanaya Pereira</p>
              <p className="member7">Member</p>
            </b>
          </div>
          <div className="leader-frame2">
            <div className="rectangle-parent10">
              <div className="frame-child11" />
              <img
                className="member-icon8"
                loading="eager"
                alt=""
                src={maheshi}
              />
            </div>
            <b className="kavindri-perera-member-container1">
              <p className="kavindri-perera1">Maheshi De Silva</p>
              <p className="member8">Member</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTeam;
