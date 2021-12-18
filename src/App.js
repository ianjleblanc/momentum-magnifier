import React, { useState, useRef } from 'react';
import CommitmentList from './momentum/CommitmentsList';
import Header from './Header';

function App() {
  const [commitments, setCommitments] = useState([]);
  const commitNameRef = useRef();

function handleAddCommit(e) {
  const name = commitNameRef.current.value
  if (name === '') return
  setCommitments(prevCommit => {
    return [...prevCommit, { id: 1, name: name, complete: false}]
  });
  commitNameRef.current.value = null;
}

  return (
    <div>
      <Header />
      <CommitmentList commitments={commitments} />
      <div>
        <input ref={commitNameRef} type="text" />
        <button onClick={handleAddCommit}>Add</button>
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
