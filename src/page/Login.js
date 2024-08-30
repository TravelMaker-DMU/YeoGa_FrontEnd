import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Login.css';
import googleicon from "../images/icon/google-icon.png";
import kakaoicon from "../images/icon/kakao-icon.png";
import facebookicon from "../images/icon/facebook.png";


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
          <h1>travel site</h1>
          <p>And various tourist attractions</p>
        </div>
        <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="Loginbutton">Login in</button> 
        </form>
        <div className="social-login">
          <div className="social-icons">
            <img src={googleicon} alt="Google" className="google"/>
            <img src={kakaoicon} alt="Kakao" className="kakao"/>
            <img src={facebookicon} alt="Naver" className="facebook"/>
          </div>
        </div>
        <p>
          Not a member yet? <a href="/register">Register!</a>
        </p>
      </div>
      </div>
     
      <Footer/>
</div>

);

}

export default Login;
