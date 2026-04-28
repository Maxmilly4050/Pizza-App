import './App.css';
import React from 'react';


function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
  );
}


function App() {
  return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
  );
}

export default App;
