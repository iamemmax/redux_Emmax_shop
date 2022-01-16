import React from 'react'
import "./loading.scss"


function FetchLoader() {
    return (
        <div className='loading'>
                <div className='myloader'>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
    )
}

export default FetchLoader
