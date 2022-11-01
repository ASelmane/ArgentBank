import './styles/css/main.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

const App = () => {
    const isLogged = useSelector(state => state.login.connected);
    console.log(isLogged);
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={ isLogged ? <Profile /> : <Navigate to="/login" /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
