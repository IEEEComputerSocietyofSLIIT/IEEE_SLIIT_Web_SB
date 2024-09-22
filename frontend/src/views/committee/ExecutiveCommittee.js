import "./ExecutiveCommittee.css";
import Yohan from "../../images/committee members/Yohan.png";
import Pasan from "../../images/committee members/Pasan.png";
import Prabasha from "../../images/committee members/Prabasha.png";
import devni from "../../images/committee members/devniExecutiveCommittee.png";
const MEMBERSHIP = () => {
  return (
    <section className="m-e-m-b-e-r-s-h-i-p" id="exec">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
          <div className="lorem-ipsum-dolor-container">
          Meet the innovative minds leading the IEEE Student Branch at SLIIT. Driven by passion and creativity, our committee members work together to inspire, lead, and empower the next generation of tech pioneers.
            
          </div>
        </div>
        <div className="f-r-a-m-e2">
          <h2 className="executive-committee">Executive Committee</h2>
          <div className="groupframe-parent">
            <div className="groupframe">
              <div className="f-r-a-m-e3">
                <div className="f-r-a-m-e-item" />
                <img
                  className="f-r-a-m-e-inner"
                  loading="eager"
                  alt=""
                  src={Yohan}
                />
              </div>
              <div className="t-e-x-t">
                  <h3 className="yohan-joseph-chairperson-container">
                    <p className="yohan-joseph">Yohan Joseph</p>
                    <p className="chairperson">CHAIRPERSON</p>
                  </h3>
                </div>
              <div className="vicechairpersonframe">
                <div className="vicechairpersonframe-child" />
                <h3 className="prabhasa-dharmarathne-vice-container">
                  <p className="prabhasa-dharmarathne">Prabhasa Dharmarathne</p>
                  <p className="vice-chairperson">VICE CHAIRPERSON</p>
                </h3>
                <img
                  className="vicechairpersonframe-item"
                  loading="eager"
                  alt=""
                  src={Prabasha}
                />
              </div>
            </div>
            <div className="frame-container">
              <div className="rectangle-group">
                <div className="frame-item" />
                <img
                  className="frame-inner"
                  loading="eager"
                  alt=""
                  src={Pasan}
                />
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <img
                  className="group-icon"
                  loading="eager"
                  alt=""
                  src={devni}
                />
                <h3 className="devni-dharmasooriya-secretary-container">
                  <p className="devni-dharmasooriya">Devni Dharmasooriya</p>
                  <p className="secretary">SECRETARY</p>
                </h3>
              </div>
              <div className="pasan-senarath-treasurer-wrapper">
                <h3 className="pasan-senarath-treasurer-container">
                  <p className="pasan-senarath">Pasan Senarath</p>
                  <p className="treasurer">TREASURER</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MEMBERSHIP;
