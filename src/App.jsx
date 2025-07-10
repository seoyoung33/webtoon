import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './assets/components/Main';
import Login from './assets/components/Login';
import naverLogo from './assets/images/logo.svg'
/* 로그인, 로그아웃 상태 관리를 위한 훅 불러오기 */
import { useState } from 'react';

function App() {
  /* 로그인 상태/업데이트 변수(초기값 로그아웃(null)) */
  const [userLogin, setUserLogin] = useState(null);

  return (
    <>
      <BrowserRouter basename='webtoon'>
        <h1><Link to="/"><img src={naverLogo} alt="" /></Link></h1>
        <Routes>
          <Route path="/" element={<Main userLogin={userLogin} setUserLogin={setUserLogin} />} /> {/* 현재 로그아웃상태야! */}
          <Route path="/login" element={<Login setUserLogin={setUserLogin} />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;