import '../DownloadBubble/DownloadBubble.css'
import { FaFileWord } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'

const DownloadBubble = () => {
    return (
        <div className="DownloadBubble">
            <div className="filetype">
                <FaFileWord/>
            </div>
            <div className="title">
                <p>Farm plan</p>
            </div>
            <div className="click">
            <a href=''><BsDownload/></a>
            </div>
        </div>
    )
}

export default DownloadBubble;