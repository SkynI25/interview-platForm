import React from 'react';
import './Main.css';
import InterviewerList from './InterviewerList';
import profile from '../image/profile.jpg';

const Main = () => {
  const interviewerList = [
    {
      src: profile,
      name: '정기현',
      state: '멘토',
      company: '(주)큐게임즈',
      position: '대표',
      findArea: ['IT 전공', '3년차 미만', '웹 프로그래머'],
    },
    {
      src: profile,
      name: '정기현',
      state: '멘토',
      company: '(주)큐게임즈',
      position: '대표',
      findArea: ['IT 전공', '3년차 미만', '웹 프로그래머'],
    },
    {
      src: profile,
      name: '정기현',
      state: '멘토',
      company: '(주)큐게임즈',
      position: '대표',
      findArea: ['IT 전공', '3년차 미만', '웹 프로그래머'],
    },
  ];
  return (
    <section className="main-tab">
      <h1>찾아요!</h1>
      <p>#컴퓨터 공학 전공자 #IT 분야 취준생 #경력자</p>
      <InterviewerList interviewerList={interviewerList} />
    </section>
  );
};

export default Main;
