import "./App.css";
import { useState } from "react";
import { CV } from "./Components/CV/Cv";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import About from "./Components/About";
import More from "./Components/More";


const { hero, education, experience, languages, habilities, volunteer } = CV;

export function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        
        
        <Hero hero={hero} />
        <About aboutMe={hero.aboutMe} />
        <div>
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer} />
    </div>
    
    
  );
}


