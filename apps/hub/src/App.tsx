import { HelloMono } from '@hel-demo/mono-comps';
import { hello } from '@hel-demo/mono-libs';
import { callFn } from '@/utils/path/to/str';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';

import * as mbox from 'mobx';
import * as limu from 'limu';
import * as helux from 'helux';
import * as ppo from 'ppo';


console.log(mbox, limu, helux, ppo);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>callFn: {callFn()}!</h3>
        <h3>@hel-demo/mono-libs hello: {hello()}!</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMono name="hel-mono" />
        <p className={styles.wrap}>
          Edit <code>src/App.tsx</code> and save to reload hel-mono.
        </p>
      </header>
    </div>
  );
}

export default App;
