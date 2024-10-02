import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
    return(
        <div id="app">
            <Header />

            <main>
                <h1>Wellcome to React Vite</h1>
            </main>

            <Footer />
        </div>
    );
}

export default App;