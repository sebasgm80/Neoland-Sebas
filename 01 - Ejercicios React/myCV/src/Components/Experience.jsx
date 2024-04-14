import "./Experience.css";
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
    return (
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index} className="card">
                    <h3>{exp.name}</h3>
                    <p>{exp.date}</p>
                    <p>{exp.where}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired
}

export default Experience;
