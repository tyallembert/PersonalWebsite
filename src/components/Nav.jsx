import { useState } from 'react';
import '../style/Nav.scss';
import Hamburger from './Hamburger';

function Nav() {
  const [showingNav, setShowingNav] = useState(false);


  const toggleNav = () => {
    setShowingNav(!showingNav);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const option = e.target.className.split(' ')[0];
    const element = document.getElementById(option);
    element.scrollIntoView({behavior: "smooth"});
    setShowingNav(false);
    
  }


  return (
    <div className="navContainer">
        <div className={`navLinks ${showingNav ? 'showingNav' : ''}`}>
            <button className='hero navLink' onClick={handleClick}>Home</button>
            <button className='about navLink' onClick={handleClick}>About</button>
            <button className='education navLink' onClick={handleClick}>Education</button>
            <button className='projects navLink' onClick={handleClick}>Projects</button>
            {/* <button className='navLink' id={""} onClick={handleClick}>Contact</button> */}
        </div>
        <Hamburger showingNav={showingNav} toggleNav={toggleNav}/>
    </div>
  );
}

export default Nav;
