import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';


function createAlert() {
  alert('hello. You clicked me');
}



function App() {
  return (
    <div className='App'>
      <Header info='this is 1 massage'
        myNumber='6' />
      <p>main content</p>
      <Footer trademark='page by Alexxstep'
        myalert={createAlert} />
        
    </div>
  );

}

export default App;