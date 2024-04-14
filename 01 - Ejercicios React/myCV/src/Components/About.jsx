import "./About.css";
import PropTypes from 'prop-types';

const About = ({ aboutMe }) => {
    return (
        <div className="about">
            <h2>About Me</h2>
            {aboutMe.map((info, index) => (
                <p key={index}>{info.info}</p>
            ))}
        </div>
    );
};

About.propTypes = {
    aboutMe: PropTypes.array.isRequired
}

export default About;

