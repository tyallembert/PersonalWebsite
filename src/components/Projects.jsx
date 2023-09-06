import "./../style/Projects.scss";
import Project from "./Project";

function Projects(props) {
    
    return (
        <>
            <h1 className="projectsTitle" id="projects" ref={props.projectsRef}>Projects</h1>
            <div className="projectsContainer">
                <Project 
                title={"Intuit Yoga"} 
                description={"I created this website for my mom's yoga business. The site is used for basic information about her services and for user signups for her classes. The site is built with plain HTML, CSS and Javascript on the frontend with a simple PHP backend."}
                image1={"./images/intuit_yoga_1.png"}
                image2={"./images/intuit_yoga_2.png"}
                image3={"./images/intuit_yoga_3.png"}
                gridColStart={1}
                gridColEnd={2}
                gridRowStart={2}
                gridRowEnd={3}
                color1={"#6f99de"} 
                color2={"#bdbdbd"}/>

                <Project 
                title={"UVMaps"} 
                description={"UVMaps was a project I worked on with a team of 4 other students for my Mobile Developement class. The goal of this project was to integrate the UVM course schedule with a map component to help students find their way to the buildings that their classes were in. This app was built using SwiftUI and intended to be used on iPhones."}
                image1={"./images/uvmaps_1.png"}
                image2={"./images/uvmaps_2.png"}
                image3={"./images/uvmaps_3.png"}
                gridColStart={3}
                gridColEnd={3}
                gridRowStart={1}
                gridRowEnd={3}
                color1={"#0f4d0d"}
                color2={"#a4a81d"}/>

                <Project 
                title={"Salvation Suppers"} 
                description={"Along with one other developer, I created a website for a local non-profit in Burlington VT, focussed on providing free meals to people in need. This site provides basic information about the organization and allows people to sign up to volunteer. The site is build with a Flask backend and plain HTML, CSS and Javascript for the frontend"}
                image1={"./images/salvation_suppers_1.png"}
                image2={"./images/salvation_suppers_2.png"}
                image3={"./images/salvation_suppers_3.png"}
                gridColStart={2}
                gridColEnd={3}
                gridRowStart={2}
                gridRowEnd={3}
                color1={"#960c0c"}
                color2={"#000000"}/>

                <Project 
                title={"City Market Stocking System"} 
                description={"This is one of my on-going projects. I am creating a management web app for the City Market Co-op in Burlington VT. This app is intended to be used by the stocking team to manage their daily tasks. The app is built with a Typescript frontend and a Node JS backend."}
                gridColStart={1}
                gridColEnd={3}
                gridRowStart={1}
                gridRowEnd={2}
                color1={"#b7b7b7"}
                color2={"#6f6f6f"}/>

                <Project 
                title={"Chess"} 
                description={"This was my final project for the Software Development course at UVM. Along with 3 other teammates, we created a single/multiplayer chess game from scratch. We wrote this web app in Flask with Object oriented Python for the backend. For the frontend we used HTML, CSS and Javascript."}
                image1={"./images/chess_1.png"}
                image2={"./images/chess_2.png"}
                image3={"./images/chess_3.png"}
                gridColStart={1}
                gridColEnd={2}
                gridRowStart={3}
                gridRowEnd={5}
                color1={"#a38c67"}
                color2={"#5e4215"}/>

                <Project 
                title={"Secure Signin"} 
                description={"This was my project for the Intro to Cybersecurity course at UVM. I created a secure signin system using a combination of HTML, CSS, Javascript with a Flask backend. The system uses a combination of hashing and salting to store passwords securely in a database using SQLite. We also got exposure to giving different permissions to different users."}
                gridColStart={2}
                gridColEnd={4}
                gridRowStart={3}
                gridRowEnd={3}
                color1={"#fc03c2"}
                color2={"#641ebd"}/>

                <Project 
                title={"Quizlet Competition"} 
                description={"This is another one of my on-going projects. Along with 2 other developers we are creating the Snake game with a slight twist. In our version there are multiple fruits and you have to eat the correct fruit corresponding to the correct answer to a Quizlet question. This app is built with Typescript and Node JS."}
                gridColStart={2}
                gridColEnd={3}
                gridRowStart={4}
                gridRowEnd={4}
                color1={"#7583FF"}
                color2={"#0A092D"}/>

                <Project 
                title={"Devil Takes a Holiday"} 
                description={"I created this website for a local cocktail bar in Burlington VT. The site provides basic info as well as a menu of the cocktails and a way to contact and reserve private events. The site is a purely frontend site built with React JS and using JSON files to store data."}
                image1={"./images/devil_1.png"}
                image2={"./images/devil_2.png"}
                image3={"./images/devil_3.png"}
                gridColStart={3}
                gridColEnd={4}
                gridRowStart={4}
                gridRowEnd={4}
                color1={"#000000"}
                color2={"#808080"}/>
            </div>
        </>
    );
}

export default Projects;