import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="left-column">
        <h1>Interviewing</h1>
        <input placeholder="직무, 분야, 기술" />
      </div>
      <div className="right-column">
        <h3>인터뷰 등록</h3>
        <h3>로그인</h3>
      </div>
    </header>
  );
};

export default Header;
