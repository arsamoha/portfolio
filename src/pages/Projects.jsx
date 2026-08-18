import { useState } from "react";
import { ProjectsNavbar } from "../components/ProjectsNavbar";
import "../components/styles/ProjectsNavbar.css";
import icookVideo from "../assets/icook_demo.mp4";
import gazeVideo from "../assets/GazeTrackerDemo.mp4";
import gazeGif from "../assets/MarkerGazeTracking.gif";

const projectData = {
  iCook: {
    title: "ICook",
    github: "https://github.com/adamhammond22/meal_planner",
    date: "June 2023 - July 2023",
    subtitle:
      "Digital recipe book mobile application created in team of six UCSC students.",
    video: icookVideo,
    body: [
      "ICook is a React Native mobile application I developed in collaboration with five other UCSC students for my capstone project. It serves as a digital recipe book, allowing users to store and share family recipes locally. One key feature is an automatic shopping list compiler that creates an editable  list based on the recipes users add to their weekly meal planner.",
      "The idea came about as a result of my obsession with FX’s The Bear. It reminded me that I wouldn’t always have access to the meals that my mother, grandmother, and other relatives in India had made for me all my life. I needed a way to preserve these recipes and I felt a mobile app would be an efficient alternative to a regular recipe book for its ease of access and share-ability across countries.",
      "We built the app using a tech stack that includes React Native, SQLite, Node.js, and Expo, primarily coding in JSX. My role focused on UI design and programming both frontend and backend features. Additionally, we implemented the SCRUM methodology during development. As the product owner, I was responsible for defining our product goals, managing the product backlog, approving user stories, and ensuring our team met deliverables on time.",
    ],
  },
  GazeTracker: {
    title: "Gaze Tracking Reader",
    github: "https://github.com/arsamoha/GazeTracker",
    date: "Sept 2022 - June 2023",
    subtitle: "Gaze-tracking reading aid built for accessibility research.",
    video: gazeVideo,
    gif: gazeGif,
    body: [
      "While at UCSC, I collaborated with Dr. Roberto Manduchi, a professor of CSE and founder of the UCSC Computer Vision Lab, on research focused on gaze-contingent screen control. This software tool is designed to explore the potential advantages and limitations of gaze-controlled screen navigation.",
      'I integrated the Tobii Pro eye tracker with macOS’s built-in "Zoomed image moves to keep pointer centered" feature. When activated by the user (via the Command+Option+8 shortcut), the screen magnifies, keeping the cursor at the center at all times. To view areas of the screen outside the zoomed-in view, the user simply moves the cursor in the desired direction, revealing that content.',
      "Using data from the Tobii Pro tracker detecting the user’s gaze position, I have utilized the Python library pynput to map the cursor’s movement directly to the user's gaze. Coordinates from both eyes are averaged to calculate the midpoint, which is then used to position the cursor (see image 2). This allows for intuitive and precise control of the screen entirely through eye movements, eliminating the need for a trackpad or mouse. The purpose of this specific approach is to support those with visual impairments, who can still read a screen but require a higher magnification of the text. Rather than needing to constantly keep their finger on the trackpad to move along the page, the software automatically moves line by line in tune with the reader's gaze.",
      "This project is part of a broader effort to improve accessibility and user experience for individuals with low vision, providing a smoother, more efficient way to interact with digital interfaces.",
    ],
  },
  WAG: {
    title: "Waste Anesthetic Gas Filtration Device",
    github: null,
    date: "October 2025 - June 2026",
    subtitle:
      "Medical device that captures waste anesthetic gases, reducing occupational exposure to operating room staff and greenhouse gas emissions.",
    body: [
      "For my master's capstone project I worked with two other MAB students mentored by a resident anesthiologist at the Montlake Medical center to design and prototype an activated charcoal-based waste anesthetic gas (WAG) filtration device.",
      "This device was composed of three parts: the housing, removable filter cartridge, and the sensor architecture.",
    ],
  },
};

export function Projects() {
  const [selected, setSelected] = useState("iCook");
  const project = projectData[selected];

  return (
    <div className="page-wrapper">
      <div className="projects-wrapper">
        <div className="projects-left">
          <h1 className="projects-title">Projects</h1>
          <ProjectsNavbar selected={selected} onSelect={setSelected} />
        </div>
        <div className="projects-right">
          <h2 className="project-title">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h2>
          <p className="project-date">{project.date}</p>
          <p className="project-subtitle">
            <em>{project.subtitle}</em>
          </p>

          {project.images && project.images.length > 0 && (
            <div className="project-images">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}

          {project.video && (
            <video key={selected} controls className="project-video-local">
              <source src={project.video} type="video/mp4" />
            </video>
          )}

          {project.gif && (
            <img
              src={project.gif}
              alt={`${project.title} demo`}
              className="project-gif-local"
            />
          )}

          {project.body.map((para, i) => (
            <p key={i} className="project-body">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
