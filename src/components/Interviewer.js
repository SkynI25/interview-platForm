import React from 'react';

const Interviewer = ({ src, name, state, company, position, findArea }) => {
  return (
    <div className="interviewer">
      <div className="top">
        <div className="left-column">
          <img src="" alt="profile" />
          <span className="name">{name}</span>
          <span className="name">{name}</span>
          <span className="name">{name}</span>
          <span className="name">{name}</span>
        </div>
        <div className="right-column"></div>
      </div>
      <div className="bottom">
        <div className="left-column"></div>
        <div className="right-column"></div>
      </div>
    </div>
  );
};

export default Interviewer;
