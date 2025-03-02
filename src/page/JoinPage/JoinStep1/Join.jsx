import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import './JoinStep1.css';

const Join  = () => {

   const [agree, setAgree] = useState(false);
   const [agree2, setAgree2] = useState(false);
   const navigate = useNavigate();
   
   const handleAgreeChange = (e) => {
     setAgree(e.target.checked);
   };

   const handleAgreeChange2 = (e) => {
    setAgree2(e.target.checked);
  };

   const nextJoinStep2 = () => {
    if (agree) {
      navigate('/join/step2'); // "/join/step2" 페이지로 이동
    }
  };

   return(
<div className="Join">

   <div className="Join-title">
      <h2 className="Join-title-text">회원가입</h2>
      <p>회원가입을 통해  다양한 서비스를 이용하세요</p>
      </div>

      <div className="Join-step-all">
        <div className="step active">1 약관동의</div>
        <div className="step">2 정보입력</div>
        <div className="step">3 가입완료</div>
      </div>
      
      

      <div className="Join-terms-section">  
      <div className="Join-terms-title">  
         <p>[여행 서비스 이용 약관]</p>
         </div>
        <div className="terms-box">

          <p>제 1 조 (목적)</p>
          <p>이 약관은 [회사명](이하 "회사"라 합니다)이 제공하는 여행 관련 서비스(이하 "서비스")의 이용과 관련하여 
          회사와 회원 간의 권리,의무 및 책임사항을 규정함을 목적으로 합니다.</p>

          <p>제 2 조 (정의)</p>
          <p>1. "서비스"란 회사가 제공하는 여행 상품 예약, 관광 정보 제공 및 기타 관련 서비스를 의미합니다.</p>
          <p>2. "회원"이란 회사의 약관에 따라 서비스 이용 계약을 체결하고 서비스를 이용하는 자를 의미합니다.</p>
          <p>3. "여행 상품"이란 회사가 제공하는 항공권, 숙박, 패키지 여행 및 기타 여행 관련 상품을 의미합니다.</p>

          <p>제 3 조 (약관의 효력 및 변경)</p>
          <p>1. 본 약관은 서비스 초기 화면에 게시됨으로써 효력을 발생합니다.</p>
          <p>2. 회사는 필요 시 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 
             변경된 약관은 사전에 공지합니다.</p>

          <p>제 4 조 (서비스의 제공 및 변경)</p>
          <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
          <ul>
            <li>항공권, 숙박 예약 서비스</li>
            <li>패키지 여행 상품 제공</li>
            <li>여행 관련 부가 서비스(렌터카, 관광지 티켓 등)</li>
          </ul>
          <p>2. 회사는 서비스의 내용을 변경할 수 있으며, 변경 사항은 사전에 공지합니다.</p>
        </div>

        <div className="Join-checkbox">
          <input 
            type="checkbox" 
            id="agree" 
            checked={agree} 
            onChange={handleAgreeChange}
          />
          <label className="Join-label" htmlFor="agree">약관동의(필수)</label>
        </div>
      </div>

      <div className="privacy-policy">
        <div className="privacy-title">
         <p>[개인정보 수집ㆍ이용 및 제3자 제공 동의서]</p>
        </div>
        <div className="privacy-box">
         <p>1. 개인정보의 수집·이용 목적</p>
         <p>[여가]는 다음의 목적을 위해 개인정보를 수집·이용합니다. 수집된 개인정보는 아래 목적 이외의 용도로는 
         사용되지 않으며, 이용 목적이 변경될 시에는 사전에 동의를 구할 예정입니다.</p>
         <p>2. 회원 가입 및 관리</p>
         <ul>
            <li>회원제 서비스 이용에 따른 본인 확인, 회원 식별 및 가입 의사 확인</li>
            <li>서비스 제공을 위한 고객 관리</li>
         </ul>
        </div>

        <div className="Join-checkbox">
          <input 
            type="checkbox" 
            id="agree" 
            checked={agree2} 
            onChange={handleAgreeChange2}
          />
          <label className="Join-label" htmlFor="agree">약관동의(필수)</label>
        </div>

      </div>
      

      <button className="next-button" disabled={!agree} onClick={nextJoinStep2}>
        다음
      </button>
      <Footer/>
</div>
   );
}


export default Join ;