import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrashCan, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {useRef} from 'react';
export default function Compose(props){
    const formRef = useRef(null)
    return(
        <div className='compose-box'>
            <div className='title-bar'>
                <div style={{fontFamily:'Lato'}}>New Message</div>
                <div className='title-bar-close'>
                    <div onClick={() => props.composeClose(false)}><FontAwesomeIcon icon={faXmark} /></div>
                </div>
            </div>
            <form action="" className='compose-form' ref={formRef}>
                <div className='input-div'>
                    <label htmlFor="" style={{fontFamily:'Lato', color:'gray'}}>to</label>
                    <input type="email" name="emailAddr" />
                </div>
                <div className={` input-div subj-div`}>
                    <input type="text" name="subject" placeholder='subject' />
                </div>
                <div className={`input-div email-div`}>
                    <textarea name="content" id="email-content"></textarea>
                </div>
            </form>
            <div className={`compose-footer title-bar`}>
                <div className='compose-sendButton' onClick={() => props.submitFunc(formRef.current)}>
                    <div>Send</div>
                    <div><FontAwesomeIcon icon={faPaperPlane}/></div>
                </div>
                <div className="discard-draft"><FontAwesomeIcon icon={faTrashCan}/></div>
            </div>
        </div>
    )
}