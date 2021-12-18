import React from 'react'
import CommitmentItem from './CommitmentItem'

export default function CommitmentList({commitments}) {
    return (
        commitments.map(commitment => {
            return <CommitmentItem key={commitment.id} commitment={commitment} />
        })
    )
}
