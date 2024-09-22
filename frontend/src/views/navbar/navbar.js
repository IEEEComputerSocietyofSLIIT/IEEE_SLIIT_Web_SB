import './style.css'
import { NavLink } from 'react-router-dom';
import IEEE from '../../images/logos/IEEE.png'
import { useState } from 'react';

const Navbar = ({ home, aboutus, communityDetails, events, contactUs, gallery, login, news, upcomingEvents, pastEvents }) => {

    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        window.scroll(0, 0);
    }

    const buttonClick = () => {
        setIsOpen(!isOpen);
    }

    const handleItemClick = () => {
        setIsOpen(false);
        scrollToTop();
    }

    return (
        <nav>
            <div className="navLogo"><img src={IEEE} alt="" /></div>
            <div className="navLinksContainer">
                <div className="navLink"><NavLink onClick={scrollToTop} to={home}>Home</NavLink></div>
                <div className="navLink"><NavLink onClick={scrollToTop} to={aboutus}>About Us</NavLink></div>
                <div className="navLink"><NavLink onClick={scrollToTop} to={contactUs}>Contact Us</NavLink></div>
                <div className="navLink"><NavLink onClick={scrollToTop} to={communityDetails}>Community Details</NavLink></div>
                <div className="navLink"><NavLink onClick={scrollToTop} to={news}>Events Page</NavLink></div>
            </div>
            <div className="navCollapsedNav">
                <div className="navCollapsedNavButton" onClick={buttonClick}>
                    <div className={`navBarCollpasedNavButtonDiv ${isOpen ? 'open' : ''}`}></div>
                    <div className={`navBarCollpasedNavButtonDiv ${isOpen ? 'open' : ''}`}></div>
                    <div className={`navBarCollpasedNavButtonDiv ${isOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`navCollapsedNavLinks ${isOpen ? 'open' : ''}`} id='navBar'>
                    <div className="navCollapsedNavLink"><NavLink onClick={handleItemClick} to={home}>Home</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={handleItemClick} to={aboutus}>About Us</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={handleItemClick} to={contactUs}>Contact Us</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={handleItemClick} to={communityDetails}>Community Details</NavLink></div>
                    <div className="navCollapsedNavLink special"><NavLink onClick={handleItemClick} to={news}>Events Page</NavLink></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
