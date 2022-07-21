import React from 'react'
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {
    return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="wrapper">
                    <Navbar/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
    )
}

export default App;
