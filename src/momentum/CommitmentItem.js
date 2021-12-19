import React from "react";

export default function CommitmentItem({ commitment, toggleCommit }) {
  function handleCommitClick() {
    toggleCommit(commitment.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={commitment.complete}
          onChange={handleCommitClick}
        />
        {commitment.name}
      </label>
      <button className="mb-1">X</button>
    </div>
  );
}
