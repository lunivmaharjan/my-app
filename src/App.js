import React,{ useState } from 'react';

function App() {
  const [count, setCount] = useState(10) 
  return (
    <div className="container">
      <div className="card-text-centre">
        <div className="card-body">
          <h2>Adding</h2>
          <div className="my-5">   
          <h2 className="my-5">{count}</h2>
          <button className="btn btn sucess mx-3" onClick={() => setCount(count + 5)}>Add 5</button>    
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
