import { useState, useEffect } from 'react';
import './../style/Hamburger.scss';

function Hamburger(props) {
    const [showingNav, setShowingNav] = useState(props.showingNav);

    useEffect(() => {
      console.log(props.showingNav)
      setShowingNav(props.showingNav);
    }, [props.showingNav])

    const toggleNav = () => {
        setShowingNav(!showingNav);
        props.toggleNav();
    }

    return (
      <div className={showingNav ? "hamburger close": "hamburger open"} onClick={toggleNav}>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
      </div>
    );
}
  
  export default Hamburger;