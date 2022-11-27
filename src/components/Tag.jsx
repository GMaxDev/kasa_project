import '../styles/tag.scss'
import React from "react"

function Tag(getTag) {
    return (
        <main className="tag">
            <p className='tag__content'>{getTag}</p>
        </main>
    )
}

export default Tag