import React from 'react';
import Interviewer from './Interviewer';

const InterviewerList = ({ interviewerList }) => {
  return (
    <ul>
      {interviewerList.map((interviewer) => (
        <Interviewer interviewer={interviewer} />
      ))}
    </ul>
  );
};

export default InterviewerList;
