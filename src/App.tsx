import './App.css';
import Counter from './components/Counter.tsx';
import { Login } from './components/Login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { ReactHookFormLogin } from './components/ReactHookFormLogin.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Counter />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/login-rhf'} element={<ReactHookFormLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
