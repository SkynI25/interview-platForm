import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import interview1 from '../image/interview1.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
    >
      <div className="carousel-item">
        <img src={interview1} alt="interview" />
        <div>
          <h1>인터뷰이를 찾고 있나요?</h1>
          <p>
            조사를 위해 필요한 인터뷰이를 찾고 계신가요?
            <br />
            지금 바로 인터뷰어로 등록하세요 :)
          </p>
          <button>인터뷰 등록하기</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={interview1} alt="interview" />
        <div>
          <h1>인터뷰이를 찾고 있나요?</h1>
          <p>
            조사를 위해 필요한 인터뷰이를 찾고 계신가요?
            <br />
            지금 바로 인터뷰어로 등록하세요 :)
          </p>
          <button>인터뷰 등록하기</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
