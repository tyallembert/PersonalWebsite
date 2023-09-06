import { useState, useEffect } from "react";
import "./../style/Title.scss";
import pdf from "./../resume.pdf";

function Title(props) {
    const [activePage, setActivePage] = useState("home");
    useEffect(() => {
        console.log(props.activePage);
        console.log(activePage);
        if(props.activePage !== activePage) {
            document.querySelector(".title").classList.add("titleFadeOut");
            setTimeout(() => {
                setActivePage(props.activePage);
            }, 150);
        }else{
            document.querySelector(".title").classList.remove("titleFadeOut");
        }
    });

    return (
        <div className="titleContainer">
            <h1 className="title" key={props.activePage}>{activePage}</h1>
            <a href={pdf} className="resume" target="_blank" rel="noreferrer">Resume</a>
        </div>
    );
}

export default Title;