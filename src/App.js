import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Player />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
