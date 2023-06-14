import { useState, useEffect } from 'react';
import '../style/Nav.scss';
import Hamburger from './Hamburger';

function Nav(props) {
  const [showingNav, setShowingNav] = useState(false);

  useEffect(() => {
    console.log("refreshing")
    console.log(showingNav)
  }, [showingNav])

  const toggleNav = () => {
    setShowingNav(!showingNav);
  }
  const changePage = (page) => {
    props.setActivePage(page.target.innerText.toLowerCase());
    toggleNav();
}

  return (
    <div className="navContainer">
        <div className={`navLinks ${showingNav ? 'showingNav' : ''}`}>
            <a className='navLink' href="#hero">Home</a>
            <a className='navLink' href="#about">About</a>
            <a className='navLink' href="#education">Education</a>
            <a className='navLink' href="#projects">Projects</a>
            <a className='navLink' href="">Contact</a>
        </div>
        <Hamburger showingNav={showingNav} toggleNav={toggleNav}/>
    </div>
  );
}

export default Nav;
