import './styles/css/main.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
