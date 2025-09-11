import './App.css';
import Counter from './components/Counter.tsx';
import { Login } from './components/Login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { ReactHookFormLogin } from './components/ReactHookFormLogin.tsx';
import { UserInfo } from './components/UserInfo.tsx';
import { MeLogin } from './components/MeLogin.tsx';
import { MeInfo } from './components/MeInfo.tsx';
import { useMe } from './hooks/useMe.ts';

function App() {
  useMe();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Counter />} />
        <Route path={'/user'} element={<UserInfo />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/login-rhf'} element={<ReactHookFormLogin />} />
        <Route path={'/me-login'} element={<MeLogin />} />
        <Route path={'/me-info'} element={<MeInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
