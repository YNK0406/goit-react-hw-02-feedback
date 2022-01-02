import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from './FeedbackItem';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul >
      {options.map(option => (
        <FeedbackItem
          key={nanoid()}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;