import React from 'react';
import './components/Page/Page.css';
import Welcome from './components/Welcome/Welcome.jsx';
import Header from './components/Header/Header.jsx';
import Article from './components/Article/Article.jsx';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
