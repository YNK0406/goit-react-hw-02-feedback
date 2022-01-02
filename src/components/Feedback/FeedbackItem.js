import PropTypes from 'prop-types';


const FeedbackItem = ({ option, onLeaveFeedback }) => {
  return (
    <li>
      <button onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

FeedbackItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackItem;