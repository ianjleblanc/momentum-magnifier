import React, { useState, useRef, useEffect } from 'react';
import CommitmentList from './momentum/CommitmentsList';
import Header from './Header';
import { v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'commitApp.commitments'

function App() {
  const [commitments, setCommitments] = useState([]);
  const commitNameRef = useRef();

useEffect(() => {
  const storedCommits = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedCommits) setCommitments(storedCommits)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(commitments))
} , [commitments])


function toggleCommit(id) {
  const newCommitments = [...commitments];
  const commitment = newCommitments.find(commit => commit.id === id);
  commitment.complete = !commitment.complete;
  setCommitments(newCommitments);
}

function handleAddCommit(e) {
  e.preventDefault();
  const name = commitNameRef.current.value
  if (name === '') return
  setCommitments(prevCommit => {
    return [...prevCommit, { id: uuidv4(), name: name, complete: false}]
  });
  commitNameRef.current.value = null;
}

  return (
    <div>
      <Header />
      
      <div>
        <input ref={commitNameRef} type="text" />
        <button onClick={handleAddCommit}>Add</button>
        <button>Clear</button>
      </div>
      <CommitmentList commitments={commitments} toggleCommit={toggleCommit}/>
      <br />
      <div>0 left to do</div> 
      <div>
      <button>Clear All</button>
      <button>Save All</button>
      </div>
        
      
      
    </div>
    
  )
}

export default App;
