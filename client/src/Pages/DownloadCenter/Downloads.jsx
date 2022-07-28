import React from 'react'
import '../DownloadCenter/Downloads.css'
import DownloadBubble from '../../Components/DownloadBubble/DownloadBubble'

export default function Downloads() {
  return (
    <div className='Downloads'>
        <div className="header">
            <h1>Download Center</h1>
        </div>
        <div className="downloads">
            <DownloadBubble/>
            <DownloadBubble/>
            <DownloadBubble/>
            <DownloadBubble/>
        </div>
    </div>
  )
}
