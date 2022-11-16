import './styles/css/main.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedOut, stayLogged } from './services/redux/loginSlice';

const App = () => {
    const dispatch = useDispatch();
    
    const isLogged = useSelector(state => state.login.connected);

    React.useEffect(() => {
        const date = new Date(localStorage.getItem("date"));
        if (date) {
            if(new Date() > date.setMinutes(date.getMinutes() + 15)) {
                dispatch(getLoggedOut());
            } else if (localStorage.getItem("token")) {
                dispatch(stayLogged());
            }
        }
    }, [dispatch]);

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
