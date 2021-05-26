import React from 'react'
const Notification = ({ notify }) => {
    return (
        <div className={`notification-container ${notify ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification