import janith from "../../images/committee members/Janith_Sachintha-Volunteer_Management_Team_Lead - Janith Sachintha-modified.png";
import './VolunteerManagementTeam.css';
import sandesh from "../../images/committee members/Sandesh Deshapriya_volunteer management team membe - Sandesh Deshapriya-modified.png";
import charith from "../../images/committee members/Charith Yohan_Volunteer Management Team - Charith Yohan-modified.png";

const VolunteerManagementTeam = () => {
  return (
    <div className="membership-development-team-fr">
        <h3 className="membership-development-team mx-auto">
          VOLUNTEER MANAGEMENT TEAM
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
                src={janith}
              />
            </div>
            <b className="pasan-senarath-leader-container">
              <p className="pasan-senarath1">Janith Sachintha</p>
              <p className="leader3">Leader</p>
              {/* <div className="socialIconss">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg></a>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </div> */}
            </b>
          </div>
          <div className="leader-frame1">
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <img
                className="member-icon7"
                loading="eager"
                alt=""
                src={sandesh}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Sandesh Deshapriya</p>
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
                src={charith}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Charith Yohan</p>
              <p className="member7">Member</p>
              
            </b>
          </div>

        </div>
      </div>

    </div>
  )
}

export default VolunteerManagementTeam