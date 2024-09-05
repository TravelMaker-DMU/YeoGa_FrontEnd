import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Login.css';
import googleicon from "../images/icon/google-icon.png";
import kakaoicon from "../images/icon/kakao-icon.png";
import facebookicon from "../images/icon/facebook.png";

import logo from  '../images/178555216.png';


const Login = () => {


     /*
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);  // 데이터를 상태로 저장
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
*/



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
            <div className="login-id-password"> <p>아이디 찾기 / 패스워드 찾기 / 회원가입 </p> </div>
          <button type="submit" className="Loginbutton">로그인</button> 
        </form>

        
        <div className="social-login">
          <div className="social-icons">
            {/* <img src={googleicon} alt="Google" className="google"/> */}
            <div className="facebook-box">
            <img src={facebookicon} alt="Naver" className="facebook"/>
            </div>
            <div className="kakao-box">
            <img src={kakaoicon} alt="Kakao" className="kakao"/>
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
