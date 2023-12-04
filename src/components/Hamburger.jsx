import './../style/Hamburger.scss';

function Hamburger(props) {
    return (
      <div className={props.showingNav ? "hamburger close": "hamburger open"} onClick={props.toggleNav}>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
      </div>
    );
}
  
  export default Hamburger;