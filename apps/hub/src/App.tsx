import React from 'react';
import { HelloMono } from '@hel-demo/mono-comps';
import { hello } from '@hel-demo/mono-libs';
import { callFn } from '@/utils/path/to/str';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>callFn: {callFn()}!</h3>
        <h3>@hel-demo/mono-libs hello: {hello()}!</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMono name="hel-momo" />
        <p className={styles.wrap}>
          Edit <code>src/App.tsx</code> and save to reload hel-mono.
        </p>
      </header>
    </div>
  );
}

export default App;
