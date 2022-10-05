import React from 'react';
import './App.css';
import { Bvatar } from "ds-comp"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Avatar size="small" logo='' colors='' /> */}
          <Bvatar size='large' logo='' shape='circle' colors='disabled' />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
