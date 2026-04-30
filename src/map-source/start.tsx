import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';

const rootElement = document.getElementById('main')
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)