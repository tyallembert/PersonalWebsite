import { useState } from 'react';
import '../style/Footer.scss';

function Footer() {

  return (
    <div className="footerContainer">
        <div className='linksContainer'>
            <a className="logo github" href='https://github.com/tyallembert'>
                <svg className="github" viewBox="0 0 141 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.500007 72C-1 27 38 0.5 68.5 0.5C100.5 0.5 138.5 25 140 69C140 119 95.5 136.5 95.5 136.5C95.5 136.5 90.5 139 88 136.5C85.5 134 88 121.5 87.5 110.5C86.5 105 83 102 83 102C83 102 110 102 114 76.5C116.5 54.5 107 48.5 107 48.5C107 48.5 108.872 45.5 108.686 39C108.5 32.5 107 30 107 30C107 30 104 29 96.5 31.5C90.5 33.5 87.5 37 87.5 37C87.5 37 80.5 34.5 70 34.5C59.5 34.5 51.5 37 51.5 37C51.5 37 48.5 34 43.5 31.5C38.5 29 33.5 29.5 33.5 29.5C33.5 29.5 31 32.5 31 39C31 45.5 33.5 48.5 33.5 48.5C33.5 48.5 24 54.5 25.5 72C26 99.5 57.5 102 57.5 102C57.5 102 55.5 103.75 54 106C52.5 109 53 112 53 112C53 112 45 114 39.5 112C34 110 32.75 103.5 27.5 100C24.5 98 19.75 97.5 19 99C18 101 24 102.5 26.5 107C29 111.5 29 114.5 34.5 119C40 123.5 53 121 53 121V133C53 136 51 138.875 47.5 137.5C33.5 132 4.00001 118.5 0.500007 72Z" stroke="black"/>
                </svg>
            </a>
            <a className="logo linkedin" href='https://www.linkedin.com/in/ty-allembert/'>
                <svg className="linkedin" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="background" d="M1 12C1 5.92487 5.92487 1 12 1H140C146.075 1 151 5.92487 151 12V140C151 146.075 146.075 151 140 151H12C5.92487 151 1 146.075 1 140V12Z"/>
                    <path className="i-top" d="M48 34.5C48 41.9558 41.9558 48 34.5 48C27.0442 48 21 41.9558 21 34.5C21 27.0442 27.0442 21 34.5 21C41.9558 21 48 27.0442 48 34.5Z" fill="white"/>
                    <path className="i-bottom" d="M23 57H46V129H23V57Z" fill="white"/>
                    <path className="n" d="M59.5 128.5V57.5H81V67C81 67 85.5 55.5 103 55.5C128.5 55.5 128.5 80.5 128.5 80.5V128.5H106V90.5C106 90.5 107 75.5 93.5 75.5C80 75.5 81 90.5 81 90.5V128.5H59.5Z" fill="white"/>
                </svg>
            </a>
            <a className="logo mail" href="mailto:recipient@example.com">
                <svg className="mail" viewBox="0 0 142 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="background" d="M1 13C1 6.37258 6.37258 1 13 1H129C135.627 1 141 6.37258 141 13V95C141 101.627 135.627 107 129 107H13C6.37258 107 1 101.627 1 95V13Z" />
                    <path className="triangle-shadow" d="M123.5 107L71 66L123.5 24.5V107Z"/>
                    <path className="zig-zag" d="M18.5 25V107C1.50003 107 1.50003 97 1.50003 97V13C1.50003 -1.5 18.5 2.00001 18.5 2.00001L71 42.5L124 2.00001C124 2.00001 140.5 -0.5 140.5 13V97C140.5 97 140.5 107 124 107V23.5L71 65.5L18.5 25Z" />
                </svg>
            </a>
        </div>
    </div>
  );
}

export default Footer;
