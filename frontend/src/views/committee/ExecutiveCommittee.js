import "./ExecutiveCommittee.css";
import Yohan from "../../images/committee members/Yohan.png";
import Pasan from "../../images/committee members/Pasan.png";
import Prabasha from "../../images/committee members/Prabasha.png";
import devni from "../../images/committee members/devniExecutiveCommittee.png";
import dean from "../../images/committee members/scan_image_1505796329-Dr__Pradeep.jpg";
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
          <h2 className="executive-committee">BRANCH COUNCILER</h2>
          <div class="mx-auto flex align-center justify-center mx-auto">
            <article class="w-full md:w-4/5 md:items-center md:flex grid rounded-3xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transform translate duration-300">
              <div class="relative md:w-1/2 flex items-end overflow-hidden rounded-xl">
                <img src={dean} alt="Hotel Photo" className="w-full " />

              </div>

              <div class="mt-1 p-2 md:p-10">
                <h2 class="text-gray-900 font-bold text-3xl my-4">Prof. Pradeep Abeygunawardhana</h2>
                <p class="text-[#00629b] mt-1 text-sm font-semibold ">Dean | Faculty of Computing | Information Technology</p>


              </div>
            </article>
          </div>
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
