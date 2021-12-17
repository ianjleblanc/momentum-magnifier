import React, { useState } from 'react';
import CommitmentList from './momentum/CommitmentsList';
import Header from './Header';

function App() {
  const [commitments, setCommitments] = useState(["momentum 1", "momentum 2"]);

  return (
    <div>
      <Header />
      <CommitmentList commitments={commitments} />
      <div>
        <input type="text" />
        <button>Add</button>
        <button>Delete</button>
      </div>
      <div>0 left to do</div> 
      <div>
      <button>Clear</button>
      <button>Save</button>
      </div>
        
      
      
    </div>
    
  )
}

export default App;
