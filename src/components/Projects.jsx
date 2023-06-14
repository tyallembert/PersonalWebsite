import "./../style/Projects.scss";
import Project from "./Project";

function Projects(props) {
    
    return (
        <>
            <h1 className="projectsTitle" id="projects" ref={props.projectsRef}>Projects</h1>
            <div className="projectsContainer">
                <Project 
                title={"Intuit Yoga"} 
                gridColStart={1}
                gridColEnd={2}
                gridRowStart={2}
                gridRowEnd={3}
                color1={"#6f99de"} 
                color2={"#bdbdbd"}/>

                <Project 
                title={"UVMaps"} 
                gridColStart={3}
                gridColEnd={3}
                gridRowStart={1}
                gridRowEnd={3}
                color1={"#0f4d0d"}
                color2={"#a4a81d"}/>

                <Project 
                title={"Salvation Suppers"} 
                gridColStart={2}
                gridColEnd={3}
                gridRowStart={2}
                gridRowEnd={3}
                color1={"#960c0c"}
                color2={"#000000"}/>

                <Project 
                title={"City Market Grocery Manager"} 
                gridColStart={1}
                gridColEnd={3}
                gridRowStart={1}
                gridRowEnd={2}
                color1={"#b7b7b7"}
                color2={"#6f6f6f"}/>

                <Project 
                title={"Chess"} 
                gridColStart={1}
                gridColEnd={2}
                gridRowStart={3}
                gridRowEnd={5}
                color1={"#a38c67"}
                color2={"#5e4215"}/>

                <Project 
                title={"Secure Signin"} 
                gridColStart={2}
                gridColEnd={4}
                gridRowStart={3}
                gridRowEnd={3}
                color1={"#fc03c2"}
                color2={"#641ebd"}/>

                <Project 
                title={"Quizlet Competition"} 
                gridColStart={2}
                gridColEnd={3}
                gridRowStart={4}
                gridRowEnd={4}
                color1={"#7583FF"}
                color2={"#0A092D"}/>
            </div>
        </>
    );
}

export default Projects;