import React from 'react';

const Interviewer = ({ interviewer }) => {
  const { src, name, company, position, findArea } = interviewer;
  return (
    <div className="interviewer">
      <div className="top">
        <img src={src} alt="profile" />
        <div className="name">{name}</div>
        <div className="company">{company}</div>
        <div className="position">{position}</div>
      </div>
      <div className="bottom">
        <div className="left-column">
          <div>인터뷰 분야</div>
          <div>{findArea}</div>
        </div>
        <div className="right-column">
          <button>인터뷰 참여하기</button>
        </div>
      </div>
    </div>
  );
};

export default Interviewer;
