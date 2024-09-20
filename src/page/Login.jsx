import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Login.css';
import googleicon from "../images/icon/google-icon.png";
import kakaoicon from "../images/icon/kakao-icon.png";
import facebookicon from "../images/icon/facebook.png";

import logo from  '../images/yega-logo.png';
import { navigate, useNavigate } from "react-router-dom";


const Login = () => {
  // const [logindata, setLogindata] = useState("");      
  // const loginOnclick = () => {

  // }

  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  
  //   useEffect(() => {
  //     fetch('')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setData(data);  // 데이터를 상태로 저장
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);
  
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }

  const navigate = useNavigate();
  
  const loginId =  () => {

   
  }

  const loginPass = () => {

  }

  const loginJoin = () => {
      navigate('/Join');
  }

return(
<div className="Login">
    <Navbar/>
    <div className="background-image">
        <div className="content">
        <img src={logo} alt="logo" className="logo"/>
        </div>

        <div className="login-form">
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" className="email"/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
            <div className="login-box"> 
              <p className="login-id" onClick={loginId}>아이디 찾기 /</p>
              <p className="login-pass" onClick={loginId}>비밀번호 찾기 /</p>
              <p className="login-join" onClick={loginJoin}>회원가입 </p>
            </div>
          <button type="submit" className="Loginbutton" >로그인</button> 
        </form>


        <div className="social-login">
          <div className="social-icons">
            {/* <img src={googleicon} alt="Google" className="google"/> */}
            <div className="facebook-box">
            <img src={facebookicon} alt="Naver" className="facebook"/>
            <div className="facebook-text">
              <p>페이스북 로그인</p>
            </div>
            </div>

            <div className="kakao-box">
            <img src={kakaoicon} alt="Kakao" className="kakao"/>
            <div className="kakao-text">
              <p>카카오 로그인</p>
            </div>
            </div>
            
            
          </div>
        </div>
       
      </div>
      </div>
     
      <Footer/>
</div>

);

}

export default Login;
