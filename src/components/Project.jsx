import { useState } from "react";
import "./../style/Project.scss";

function Project(props) {
    const [showingProject, setShowingProject] = useState(false);
    const style = {
        gridColumn: props.gridColStart + '/' + props.gridColEnd,
        gridRow: props.gridRowStart + '/' + props.gridRowEnd,
        background: 'linear-gradient(0deg, ' + props.color2 + ', ' + props.color1 + ')'
    }
    
    return (
        <>
            {
                showingProject ? (
                    <div className="project">
                        <div className="projectInfo">
                            <h2 className="projectTitle">{props.title}</h2>
                            <p className="projectDescription">{props.description}</p>
                            <div className="projectLinks">
                                <a href={props.github} target="_blank" rel="noreferrer" className="projectLink">Github</a>
                                <a href={props.live} target="_blank" rel="noreferrer" className="projectLink">Live</a>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="projectPreview" style={style}>
                        <h2 className="projectTitle">{props.title}</h2>
                    </div>

                )
            }
        </>
    );
}

export default Project;