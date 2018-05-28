import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  //<Root store={store} />
  ReactDOM.render(<h1>Todos App</h1>, rootEl)
})
