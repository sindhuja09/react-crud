
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactBootstrap from 'react-bootstrap';
import App from './component/App';
import css from './css/style.css';
const root=document.getElementById('root');
const quotes = [
   {
    _id: '1',
    quoteText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non massa vitae risus fermentum ullamcorper.',
    authorName:'Author1'
   },
   {
    _id: '2',
    quoteText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...',
    authorName:'Author2'
   }
  ];

ReactDOM.render(    
    <App quotes={quotes}/>,
    root
);