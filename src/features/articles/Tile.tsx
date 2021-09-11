import React from 'react'

interface props {
    title: string
    ups: number
    media?: string
}

export const ArticleTile = ( {title, ups, media}: props)  => {
    return (
        <div className="tile">
            <h2>{title}</h2>
            <p>{ups}</p>
            {media && 
                <img src={media} alt="article" />
            }
        </div>
    )
}