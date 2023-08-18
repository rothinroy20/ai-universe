import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  
  return (
    <>
    <Header />
    <Button>Sort By Date</Button>
    <Card />
  
    </>
  )
}

export default App
