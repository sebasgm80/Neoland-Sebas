import "./Education.css";
import PropTypes from 'prop-types'

const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired
}

export default Education;