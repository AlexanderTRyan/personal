import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/F6.png';
import mock09 from '../assets/images/computer_architecture.jpg';
import mock10 from '../assets/images/cutest-dog-breeds-jpg.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>PawPals</h2>
                <p>Created a mobile-optimized web app that brings pet adoption within reach using an intuitive Tinder-style swiping interface to match compatible dogs. I built the front-end using React, leveraged Firebase for real-time database management, and included AI-recommended pairing for enhanced pet compatibility. This project improved my skills in full-stack web development, user experience, and cloud-based authentication. Technology used was React, Firebase, Google Cloud, and OpenAI APIs for intelligent pet pairing.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Custom CPU Unit</h2>
                <p>Designed and developed a custom CPU with a unique instruction set and pipeline architecture, optimizing computational performance. My responsibility was to design the control and data paths, implement the ALU and registers, and verify functionality using hardware description languages. This project enhanced my understanding of computer architecture, pipelining, and digital design as well as my Verilog/VHDL expertise. I employed software like Quartus, Xilinx Vivado, and FPGA development boards to simulate and validate the processor.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Custom Machine Learning Accerlator</h2>
                <p>Developed and deployed a hardware accelerator specifically for deep learning applications, with particular focus on speeding up matrix operations and parallel processing. I designed and implemented the accelerator's architecture with memory efficiency and computational efficiency in mind. This project deepened my knowledge of hardware/software co-design, FPGA-based ML acceleration, and performance benchmarking. Xilinx Vivado, High-Level Synthesis (HLS), and open-source ML models were utilized to benchmark and optimize the performance of the accelerator.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Senior Design: Smart Home</h2>
                <p>Created an automation smart home system with an integration of Home Assistant and proprietary Internet of Things hardware for optimized energy efficiency through smart temperature and lighting controls. I conceptualized, built, and released embedded systems utilizing ESP32 microcontrollers, developed MQTT-based connectivity, and provided security and compliance to smart home and security standards. This project stretched my IoT integration, embedded coding, and networking protocols skill. The most important resources were Home Assistant, MQTT, and IEEE smart home automation standards.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;