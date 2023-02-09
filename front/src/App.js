import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import '../src/component/navbar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inscription from './component/Inscription.js';
import Connexion from './component/Connexion';
import Apropos from './component/Apropos'
import Footer from './component/Footer.js';

function App() {
    return ( 
        <div className="App">

            <Navbar />
            
            <Routes>
                <Route path='/' exact element={<Home />} > </Route>
                <Route path='/inscription'  element={<Inscription />}> </Route>
                <Route path='/connexion'  element={<Connexion />}> </Route>
                <Route path='/Apropos'  element={<Apropos />}> </Route>
            </Routes>
            

        </div>
    );
}
export default App;
