import { Link } from "react-router-dom";
import toon from '../images/webtoon.jpg'

function Main({userLogin,setUserLogin}){
    return(
        <>
            {/* {userLogin ? 로그인화면 : 로그아웃화면} */}
            {userLogin ? (
                <div id="login_container">
                    <p>{userLogin}님 환영합니다.</p>
                    <button type="button" onClick={()=>setUserLogin(null)}>로그아웃</button>
                    <h2>관심웹툰</h2>
                    <div className="webtoon">
                        <img src={toon} alt="" />
                        <h3>대학일기</h3>
                        <p>자까</p>
                    </div>
                </div>
            ) : (
                <div id="logout_container">
                    <p>로그인이 필요합니다.</p>
                    <h2>관심웹툰</h2>
                    <p>로그인 하시면 PC와 모바일에 등록하신<br />관심웹툰을 모두 보실 수 있습니다.</p>
                    <Link to="/login">로그인</Link>
                </div>
            )}
        </>
    )
}
export default Main;