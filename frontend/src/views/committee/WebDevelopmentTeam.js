import teamPhoto from '../../images/committee members/teamPhoto.jpg'
import teamPhoto2 from '../../images/committee members/teamPhoto2.jpg'

const WebDevelopmentTeam = () => {
    return (
        <>
            <div className="membership-development-team-fr">
                    <h3 className="membership-development-team mx-auto">
                        WEB DEVELOPMENT TEAM
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
                    <div className="lead-pic-member">
                        <div style={{
                            width: '80%',
                        }}>
                            <img src={teamPhoto2} alt="Team" style={{
                                width: '100%', borderRadius: '40px', 
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebDevelopmentTeam;