import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("button")
  return (
    <div className="App">
      <h1>This is shanky</h1>
      <p>first react test case</p>
      <br />
      {/* <input type="text" name='username' placeholder="enter username" id='userId'/> */}
      <br /><br />
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />

      <button onClick={()=>{
        setData(data)
      }}>{data}</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
