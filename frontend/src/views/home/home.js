import './style.css';
import CS from '../../images/logos/CSYelllow2.png'
import EMBS from '../../images/logos/EMBS.png'
import IAS from '../../images/logos/IAS.png'
import IEEE from '../../images/logos/IEEE.png'
import PES from '../../images/logos/PES.png'
import RAS from '../../images/logos/RAS.png'
import WIE from '../../images/logos/WIE.png'

const Home = () => {
    return ( 
        <>
            <div className="Header">
                <div className="HeaderText">
                    <div className="HeaderText1">IEEE STUDENT BRANCH</div>
                    <div className="HeaderText2">SLIIT</div>
                </div>
                <div className="HeaderJoinUs">
                    <button className="HeaderJoinUsButton">Join Us</button>
                </div>
            </div>
            <div className="WelcomeSection">
                <div className="WelcomeSectionContent">
                    <div className="WelcomeSectionText">
                        <div className="WelcomeSectionTextHeading">Welcome To IEEE Student Branch of SLIIT</div>
                        <div className="WelcomeSectionTextPara">Since our inception in 2011, It has been one of the most famous student chapters in Sri Lanka.
    Pioneering a variety of projects in a variety of fields, including technical projects and community service as our student members including seminars and career support workshops in science and technical areas and personal development programs to improve the productivity of their achievements.
                        </div>
                        <div className="WelcomeSectionTextButton"><button>About Us</button></div>
                    </div>  
                </div>    
            </div>
            <div className="Chapters">
                <div className="ChaptersTitle">IEEE Student Branch Chapters</div>
                <div className="ChaptersContainer">
                    {/* <div className="ChapterCard">
                        <div className="ChapterTitle">Lorem Ipsum</div>
                        <div className="ChapterImage"><img src={IEEE} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div> */}

                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE WIE Affinity Group</div>
                        <div className="ChapterImage"><img src={WIE} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                    
                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE Computer Society</div>
                        <div className="ChapterImage"><img src={CS} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>

                    
                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE Industry Applications Society of SLIIT</div>
                        <div className="ChapterImage"><img src={IAS} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>

                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE PES Student Branch Chapter of SLIIT</div>
                        <div className="ChapterImage"><img src={PES} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                    
                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE EMBS Student Branch Chapter</div>
                        <div className="ChapterImage"><img src={EMBS} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>

                    

                    <div className="ChapterCard">
                        <div className="ChapterTitle">IEEE RAS Student Branch Chapter</div>
                        <div className="ChapterImage"><img src={RAS} alt="CS Logo" /></div>
                        <div className="ChapeterDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>

                    
                </div>
            </div>
        </>
     );
}
 
export default Home;