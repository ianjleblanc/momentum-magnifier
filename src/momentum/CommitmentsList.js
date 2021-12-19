import React from 'react'
import CommitmentItem from './CommitmentItem'

export default function CommitmentList({commitments, toggleCommit}) {
    return (
        commitments.map(commitment => {
            return <CommitmentItem key={commitment.id} toggleCommit={toggleCommit} commitment={commitment} />
        })
    )
}
