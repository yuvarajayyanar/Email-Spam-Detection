import React from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function message(props){
    return(
        <div className='message-strip'>
            <div className='sender-logo-div'>
                <div className='sender-logo'>{props.senderName[0]}</div>
            </div>
            <div>
                <div className='message-condensed-body'>
                    <div className='message-header'>
                        <div className='senderName' style={{fontWeight:'bold'}}>{props.senderName}</div>
                        <div className='received-time' style={{fontWeight:'bold', fontSize:'12px'}}>{props.sentTime}</div>
                    </div>
                    <div className='sender-mail' style={{fontSize:'14px', marginTop:'8px', marginBottom:'8px', fontWeight:'bold'}}>{props.senderMail}</div>
                </div>
                <div className='content' style={{fontSize:'14px'}}>{props.content}</div>
            </div>
            <div className='mail-options'>
                <div className='sender-logo mail-delete' onClick={() => props.handleDelete(props.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
            </div>
        </div>
    )
}