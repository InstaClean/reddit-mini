import React from 'react'

interface props {
    title: string
}

export const ArticleTile = ( {title}: props)  => {
    return (
        <div className="tile">
            <h2>{title}</h2>
        </div>
    )
}