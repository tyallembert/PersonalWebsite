import { useRef, useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../style/About.scss';
import TyPic from "../images/ty-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

function About(props) {
    const mainContainer = props.infoContainer;
    const pic1 = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.fromTo(pic1.current,
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
                        trigger: pic1.current,
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
        <div className='section2' ref={props.aboutRef}>
            <div className='leftSide' ref={pic1}>
                <img className='me' src={TyPic} alt='Me' />
            </div>
            <div className='rightSide' id='about'>
                <h1 className='header'>About Me</h1>
                <p>
                    Ever since I was young, I have had an artistic side. I started on pencil and paper and 
                    more recently have found the world of web development. Through my schooling and in my freetime, 
                    I have taught myself how to code and have found a passion for it. I am always looking for new
                    ways to improve my skills and learn new things. In my free time I have numerous side projects 
                    ranging from personal projects to freelance work. I am always looking for new opportunities to
                    learn and grow as a developer.
                </p>
            </div>
        </div>
    );
}

export default About;