import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faStar, faTrashCan, faFile, faExclamationTriangle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export default function Nav(props){
    return(
        <nav className="nav-bar">
            <div 
                className={`strip ${props.active === 1 ? 'active' : ''}`} 
                onClick={() => props.handleClick(1)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faInbox} /></div>
                <span style={{fontSize: '14px'}}>Inbox</span>
            </div>
            <div 
                className={`strip ${props.active === 2 ? 'active' : ''}`} 
                onClick={() => props.handleClick(2)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
                <span style={{fontSize: '14px'}}>Sent</span>
            </div>
            <div 
                className={`strip ${props.active === 3 ? 'active' : ''}`} 
                onClick={() => props.handleClick(3)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faStar} /></div>
                <span style={{fontSize: '14px'}}>Starred</span>
            </div>
            <div 
                className={`strip ${props.active === 4 ? 'active' : ''}`} 
                onClick={() => props.handleClick(4)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faFile} /></div>
                <span style={{fontSize: '14px'}}>Drafts</span>
            </div>
            <div 
                className={`strip ${props.active === 5 ? 'active' : ''}`} 
                onClick={() => props.handleClick(5)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faTrashCan} /></div>
                <span style={{fontSize: '14px'}}>Trash</span>
            </div>
            <div
                className={`strip ${props.active === 6 ? 'active' : ''}`} 
                onClick={() => props.handleClick(6)}
            >
                <div className="strip-icon"><FontAwesomeIcon icon={faExclamationTriangle} /></div>
                <span style={{fontSize: '14px'}}>Spam</span>
            </div>
        </nav>
    )
}