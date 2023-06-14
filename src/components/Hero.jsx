
import { forwardRef } from 'react';
import '../style/Hero.scss';
import ty from './../images/ty.png';


// function Hero(props) {
const Hero = forwardRef((props, ref) => {

  return (
    <div className='hero' id='hero' ref={props.heroRef}>
        <div className='leftSide'>
            <h1 className='header'>Ty Allembert</h1>
            <h3 className='subHeader'>Web/Software Engineer</h3>
            <div className='skillsContainer'>
                <div className='skill html'>
                    <p>HTML</p>
                </div>
                <div className='skill css'>
                    <p>CSS</p>
                </div>
                <div className='skill javascript'>
                    <p>Javascript</p>
                </div>
                <div className='skill react'>
                    <p>React JS</p>
                </div>
                <div className='skill swiftui'>
                    <p>Swift UI</p>
                </div>
                <div className='skill python'>
                    <p>Python</p>
                </div>
                <div className='skill flask'>
                    <p>Flask</p>
                </div>
            </div>
        </div>
        <div className='rightSide'>
            <img className='ty' src={ty} alt='Ty Allembert' />
        </div>
    </div>
  );
})

export default Hero;
