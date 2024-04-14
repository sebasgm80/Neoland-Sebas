import "./More.css";
import PropTypes from 'prop-types';

const More = ({ languages, habilities, volunteer }) => {
    return (
        <div className="more">
            <h2>Languages</h2>
            <p>{languages.language}</p>
            <p>Writing level: {languages.wrlevel}</p>
            <p>Speaking level: {languages.splevel}</p>

            <h2>Habilities</h2>
            <ul>
                {habilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}
            </ul>

            <h2>Volunteer Experience</h2>
            {volunteer.map((exp, index) => (
                <div key={index} className="card">
                    <h3>{exp.name}</h3>
                    <p>{exp.where}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

More.propTypes = {
    languages: PropTypes.object.isRequired,
    habilities: PropTypes.array.isRequired,
    volunteer: PropTypes.array.isRequired
}

export default More;
