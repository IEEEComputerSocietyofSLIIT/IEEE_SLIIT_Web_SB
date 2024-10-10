import "./CommitteeChairpersons.css";
import adithya from "../../images/committee members/Adithya_CS_Chairpersone - Adithya Liyanaarachchi-modified.png";
import ramudu from "../../images/committee members/Ramudu Welikala - Chairperson-modified.png"
import udula from "../../images/committee members/Wijethunga HNUD - Chair.jpg"
import yashoda from "../../images/committee members/Yasodas.jpg"
import dimeth from "../../images/committee members/chairperson_current.jpg"

const CommitteeChairpersons = () => {
    return (
        <>
           

            <section>
            <h3 className="md:text-5xl text-2xl font-bold text-[#ffa300] mb-10">CHAPTER CHAIRPERSONS</h3>
    {/* Container */}
    <div className="niumi-halmillawewa-leader">
        <div className="membership-development-team-te">
          <div className="leadership-team">
            <div className="rectangle-parent3">
              <div className="frame-child4" />
              <img
                className="lead-pic-icon1"
                loading="eager"
                alt=""
                src={adithya}
              />
            </div>
            <b className="niumi-halmillawewa-leader-container">
              <p className="niumi-halmillawewa">Adithya Liyanaarachchi</p>
              <p className="text-sm text-[#ffa300]">IEEE Computer Society</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader">
            <div className="thiruni-member">
              <div className="thiruni-member-child" />
              <img
                className="member-icon3"
                loading="eager"
                alt=""
                src={ramudu}
              />
            </div>
            <b className="anjula-hirimuthugoda-member-container">
              <p className="anjula-hirimuthugoda">Ramudu Welikala</p>
              <p className="text-sm text-[#ffa300]">IEEE Industry Applications Society</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader1">
            <div className="rectangle-parent4">
              <div className="frame-child5" />
              <img
                className="member-icon4 rounded-full"
                loading="eager"
                alt=""
                src={udula}
              />
            </div>
            <b className="mithila-samarawickrama-member-container">
              <p className="mithila-samarawickrama">Udula Wijesinghe</p>
              <p className="text-sm text-[#ffa300]">IEEE Robotics and Automation Society</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader1">
            <div className="rectangle-parent4">
              <div className="frame-child5" />
              <img
                className="member-icon4 rounded-full"
                loading="eager"
                alt=""
                src={yashoda}
              />
            </div>
            <b className="mithila-samarawickrama-member-container">
              <p className="mithila-samarawickrama">Yashoda Athapattu</p>
              <p className="text-sm text-[#ffa300]">IEEE Women in Engineering</p>
            </b>
          </div>
          <div className="mahdy-abdullah-nawfar-leader1">
            <div className="rectangle-parent4">
              <div className="frame-child5" />
              <img
                className="member-icon4 rounded-full"
                loading="eager"
                alt=""
                src={dimeth}
              />
            </div>
            <b className="mithila-samarawickrama-member-container">
              <p className="mithila-samarawickrama">Dimeth Wimalasena</p>
              <p className="text-sm text-[#ffa300]">IEEE Power and Energy Society</p>
            </b>
          </div>
        </div>
      </div> 
      
    {/* <div className="mx-auto flex flex-col md:flex-row justify-center w-screen gap-4 px-5 pt-16 md:px-10 md:pt-20">
        <div className="grid max-w-xl gap-6 w-full">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                    Adithya Liyanaarachchi<br />
                    <span className="text-md text-[#ffa300]">IEEE Computer Society</span>
                </p>
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Ramudu Welikala<br />
                    <span className="text-md text-[#ffa300]">IEEE Industry Applications Society</span>
                </p>
            </div>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Dimeth Wimalasena

                <br />
                    <span className="text-md text-[#ffa300]">IEEE Power and Energy Society</span>
                </p>
            </div>
        </div>

        <div className="grid max-w-xl gap-6 w-full">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Udula Wijesinghe<br />
                    <span className="text-md text-[#ffa300]">IEEE Robotics and Automation Society</span>
                </p>
            </div>
            
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Yashoda Athapattu<br />
                    <span className="text-md text-[#ffa300]">IEEE Women in Engineering</span>
                </p>
            </div>
        </div>
    </div> */}
</section>

        </>
    )
}

export default CommitteeChairpersons;