import React from 'react'

export default function CommitmentItem({commitment}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={commitment.complete} />
                {commitment.name}
            </label>
            
        </div>
    )
}
