import { useRef, useEffect } from 'react';
import '../style/Education.scss';
import uvm from './../images/uvm.jpg';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education(props) {

    const mainContainer = props.infoContainer;
    const pic = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.fromTo(pic.current,
                {
                    x: -500,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3',
                    scrollTrigger: {
                        trigger: pic.current,
                        scroller: mainContainer.current,
                        start: 'top-=300 top',
                        end: 'top top',
                        toggleActions: 'play none none reverse',
                    },
                });
        });
        return () => ctx.revert(); // <-- CLEANUP!
    }, [mainContainer])

  return (
    <div className='section3' id='education' ref={props.educationRef}>
        <div className='leftSide' ref={pic}>
            <img className='uvm' src={uvm} alt='University of Vermont' />
            <h1 className='uvmHeader'>UVM</h1>
        </div>
        <div className='rightSide'>
            <h1 className='header'>Education</h1>
            <p>
                I graduated from the University of Vermont in 2023 with a Bachelor's Degree in Computer Science.
                I started my college journey as a mechanical engineer. For one of my required classes I was introduced
                to the beautiful language we all know as Python. I fell in love with coding and decided to switch my major
                to Computer Science. Since then I have loved every minute of it and have been teaching myself new languages
                and frameworks in my free time.
            </p>
        </div>
    </div>
  );
}

export default Education;