import { useEffect, useState } from "react";
import "./../style/Project.scss";

function Project(props) {
    const [showingProject, setShowingProject] = useState(false);
    useEffect(() => {
        setShowingProject(false);
    }, [])
    
    const toggleShowing = () => {
        setShowingProject(!showingProject);
    }
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
                        <div className="projectLinks">
                                {/* <a href={props.github} target="_blank" rel="noreferrer" className="projectLink">Github</a>
                                <a href={props.live} target="_blank" rel="noreferrer" className="projectLink">Live</a> */}
                            </div>
                        <div className="projectInfo">
                            <h2 className="projectTitle">{props.title}</h2>
                            <p className="projectDescription">{props.description}</p>
                        </div>
                        <div className="projectImages">
                            <img src={props.image1} alt="" className="projectImage image1"/>
                            <img src={props.image2} alt="" className="projectImage image2"/>
                            <img src={props.image3} alt="" className="projectImage image3"/>
                        </div>
                        <button className="projectButton" onClick={toggleShowing}>Close</button>
                    </div>
                ):(
                    <div className="projectPreview" style={style} onClick={toggleShowing}>
                        <h2 className="projectTitle">{props.title}</h2>
                    </div>

                )
            }
        </>
    );
}

export default Project;