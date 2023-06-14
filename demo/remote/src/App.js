import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
    <>
    <h1 style={{'textAlign': 'center'}}>Remote: Module Federation Demo</h1>
    <Header value={4} style={{ "fontSize": "12px" }}/>
    <h2>Remote App</h2>
    <Button value={4}/>
    <Footer />
    </>
    
  );
}

export default App;
