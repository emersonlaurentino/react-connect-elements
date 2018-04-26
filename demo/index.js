import React from 'react';
import { render } from 'react-dom';
import ConnectElements from '../src';
import './styles.css';

const Demo = () => (
  <div className="container">
    <header>
      <a href="https://github.com/emersonlaurentino/react-connect-elements">
        <h1>React Connect Elements</h1>
      </a>
    </header>
    <div className="elements">
      <div className="elements-row">
        <div className="element element1" />
        <div className="element element2" />
        <div className="element element3" />
      </div>
      <div className="elements-row">
        <div className="element element4" />
      </div>
      <div className="elements-row">
        <div className="element element5" />
        <div className="element element6" />
        <div className="element element7" />
      </div>
    </div>
    <footer>
      <span>
        by <a href="https://github.com/emersonlaurentino">@emersonlaurentino</a>
      </span>
    </footer>
    <ConnectElements
      selector=".elements"
      overlay={10}
      elements={[
        { from: '.element1', to: '.element4' },
        { from: '.element2', to: '.element4' },
        { from: '.element3', to: '.element4' },
        { from: '.element5', to: '.element4' },
        { from: '.element6', to: '.element4' },
        { from: '.element7', to: '.element4' },
      ]}
    />
  </div>
);

render(<Demo />, document.querySelector('#root'));
