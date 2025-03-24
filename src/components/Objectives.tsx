import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Objectives.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Objectives() {
    return (
    <div className="container" id="objectives">
        <div className="skills-container">
            <h1>Objectives</h1>
            <div className="skills">
                <div className="skill">
                    <p>My career aspiration is to use my understanding of computer engineering to design revolutionary solutions that enhance efficiency, better lives, and address complex technical issues. I desire to work at the intersection of hardware and software, fine-tuning systems for performance, scalability, and reliability. In embedded systems, AI-driven applications, or network solutions, I desire to do projects that make a tangible difference. Finally, my aim is to develop as a problem solver, learning and evolving constantly while taking care of others and leaving a positive footprint in the industry.</p>
                </div>

                <a href="/A Reflective Journey.pdf" download="A Reflective Journey">Click to Download: Cumulative Reflection</a>
                <br/>
                <a href="/Reflection on General Education Courses.pdf" download="Reflection on General Education">Click to Download: Reflection on General Education</a>
                <br/>
                <a href="/Ethics Essay.pdf" download="Ethics Essay">Click to Download: Ethics Essay</a>
                <br/>
                <a href="/Alexander Ryan Resume.pdf" download="Resume">Click to Download: Resume</a>

            </div>
        </div>
    </div>
    );
}

export default Objectives;