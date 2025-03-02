import React from "react";
import './Footer.css';

const Footer = () => {
    return (
      <div className="Footer-container">
        <div className="Footer-nav">
          <a href="#">서비스 문의</a>
          <span>|</span>
          <a href="#">이용약관</a>
          <span>|</span>
          <a href="#">개인정보 처리방침</a>
          <span>|</span>
          <a href="#">가이드 약관</a>
        </div>

        <div className="Footer-main-content">
          <div className="Footer-main-left">
          <div className="Footer-main-left-text">
            <p>주소: 서울특별시 구로구 경인로 445</p>
            <p>전화: 02-2610-1700</p>
            <p>제휴 문의 : dongyang@naver.com</p>
          </div>
          </div>



          <div className="Footer-topics">
            <div className="Footer-column">
              <h2 className="Footer-coulumn-first">소개</h2>
              <p>회사소개</p>
              <p>공고</p>
              <p>채용</p>
            </div>

            <div className="Footer-column">
              <h2 className="Footer-coulumn-first">파트너</h2>
              <p>여행일정</p>
              <p>파트너 홈</p>
              <p>마케팅</p>
            </div>

            <div className="Footer-column">
              <h2 className="Footer-coulumn-first">지원</h2>
              <p>공지사항/FAQ</p>
              <p>도움말</p>
              <p>개인정보</p>
            </div>

          </div>
        </div>
      </div>
    );
  };
  



export default Footer;