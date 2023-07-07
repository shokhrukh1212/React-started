import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import mine from "../public/mine.jpg";
import "./styles.css";


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro /> 
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <img style={{width: "100%"}} src={mine} alt="my avatar" />
  )
}

function Intro() {
  return (
    <div>
      <h1> Shokhrukh Karimov </h1>
      <p>I am a Front End Software Engineer and now, I am trying to Learn some technologies which are used in Front End, like Angular and React Js. </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill 
        skill="HTML+CSS"
        emoji="&#128512;" 
        color="green" 
      />
      <Skill 
        skill="Javascript"
        emoji="&#128513;"
        color="yellow"
      />
      <Skill 
        skill="Angular"
        emoji="&#128514;"
        color="red"
      />
      <Skill 
        skill="React"
        emoji="&#128517;"
        color="pink"
      />
    </div>
  )
}

function Skill(props) {
  return (
      <div className="skill" style={{backgroundColor: props.color}}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
  )
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


