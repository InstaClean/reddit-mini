import React from 'react'

interface props {
    title: string
    ups: number
    media?: string
    isVideo: boolean
}

export const ArticleTile = ( {title, ups, media, isVideo}: props)  => {
    return (
        <div className="tile">
            <h2>{title}</h2>
            <p>{ups} upvotes</p>
            {(media && !isVideo) && 
                <img src={media} alt="article" />
            }
            {(media && isVideo) &&
                <video controls  >
                    <source type="video/mp4" src={media} />
                </video>
            }
        </div>
    )
}