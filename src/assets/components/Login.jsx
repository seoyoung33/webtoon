import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUserLogin}){
    const idRef = useRef(null)
    const pwRef = useRef(null)
    const navi = useNavigate()

    //아이디, 비밀번호 유효성 체크 버튼 함수
    const loginChk = ()=>{
        // console.log(idRef.current.value)
        // 함수 안 return을 만나면? 추가 명령어를 읽지 않고 함수가 종료된다.
        if(!idRef.current.value){ alert('아이디를 입력하세요'); return; } /* 입력값이 없을 때 실행창이 떠라 */
        if(!pwRef.current.value){ alert('비밀번호를 입력하세요'); return; } /* 입력값이 없을 때 실행창이 떠라 */
        //아이디와 비밀번호를 모두 입력 시 메인으로 이동
        setUserLogin(idRef.current.value) //null(거짓 초기값)에서 참값으로 값 변경 (참 인식값이면 아무값이나 ok)
        navi('/')
    }

    return(
        <>
            <h2>Login</h2>
            <form action="#" method="post">
                <input ref={idRef} type="text" name="userId" id="userId" placeholder="아이디입력" />
                <input ref={pwRef} type="password" name="userpw" id="userpw" placeholder="비밀번호입력" />
                <button onClick={loginChk} type="button" id="loginBtn">로그인</button>
            </form>
        </>
    )
}
export default Login;