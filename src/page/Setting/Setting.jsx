import React, { useState, useEffect } from 'react';
import UserNavbar from "../../components/UserNavbar/UserNavbar";
// import Navbar from "../../components/Navbar";
import '../Setting/Setting.css';


const Setting = () => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      const now = new Date();
      const formattedDate = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentDate(formattedDate); // 포맷된 날짜를 상태로 설정
    }, []);





return(
 <div className="Setting-page">
 {/* <Navbar/> */}
 <UserNavbar/>
 <div className="Setting-page-container">
    <div className="Setting-page-container-section">
    <div className="Setting-page-container-User-img">
    </div>
    <div className="Setting-page-container-User-imgchange">
        프로필 변경하기
    </div>
    <div className="Setting-page-User">사용자 정보 </div>
  
    <form action="">

    <div className="Setting-page-form-div">
        <p className="Setting-page-file">이름</p>
        <input type="text" value='홍길동' />
    </div>

    <div className="Setting-page-form-div">
        <p className="Setting-page-file">이메일</p>
        <input type="text" value= 'dongyang@naver.com' />
    </div>
    
    <div className="Setting-page-form-div">
        <p className="Setting-page-file">아이디</p>
         <input type="text" value='user'/>
    </div>

    <div className="Setting-page-form-div">
        <p className="Setting-page-file">비밀번호</p>
         <input type="text" value= '1234' />
    </div>
  </form>

  {/* <div className="Setting-page-button-container">
  <button className="Setting-page-button-cancel">취소</button>
  <button className="Setting-page-button-cancel">저장</button>
  </div> */}
 </div>
 </div>
 <div className="Setting-page-side">
    <div className='Setting-page-side-container'>
    <div className="Setting-page-side-title">활동 정보</div>

    <div className="Setting-page-side-section">
       <div className="Setting-page-side-signupDate">가입일
         <div className="Setting-page-side-signipDate-value">{currentDate} </div>   
    </div>

    <div className="updateDate">최신 업데이트일
        <div className='Setting-page-side-updateDate-value'>{currentDate}</div>
        </div>    
    </div>

    <div className='Setting-page-side-writtenBy'>
        <div className='Setting-page-side-writtenBy-title'>작성</div>

        <div className='Setting-page-side-writteBy-article'>게시글</div>
        <div className='Setting-page-side-writteBy-comment'>댓글</div>
        <div className='Setting-page-side-writteBy-inquiry'>문의</div>
    </div>  
    </div>
   
    <div className='Setting-page-aside'>
        <div className='Setting-page-aside-section'>
            aa
        </div>
        </div>
    </div>  
    
 </div>
)

}

export default Setting;