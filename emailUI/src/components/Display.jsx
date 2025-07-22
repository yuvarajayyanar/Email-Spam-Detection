import React from 'react'
import Message from './Message'
import data from '../data/data.js'
import {useMemo, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Card from './Card.jsx'
import axios from 'axios';

export default function Display(props){
    const [sentMessage, setSentMessage] = React.useState([])
    const messages = useMemo(() => {
        return data.map((item) => {
        return(
            <Message 
                id = {item.id}
                senderName = {item.senderName}
                sentTime = {item.sentTime}
                senderMail = {item.senderMail}
                content = {item.content}
            />
        )
    })
    }, [data])
    
    const fetchMessages = () => {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            const data = res.data.map((item) => {
                return {
                    id: item.id,
                    senderName: "Sophia Bennett",
                    sentTime: null,
                    senderMail: item.emailAddr,
                    content: item.content
                }
            })
        setSentMessage(data)
        })
        .catch(error => {
            console.log("There is an error!", error)
        })
    }
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/')
    //     .then(res => {
    //         const data = res.data.map((item) => {
    //             return {
    //                 id: item.id,
    //                 senderName: "Anonymous",
    //                 sentTime: null,
    //                 senderMail: item.emailAddr,
    //                 content: item.content
    //             }
    //         })
    //     setSentMessage(data)
    //     })
    //     .catch(error => {
    //         console.log("There is an error!", error)
    //     })
    // }, [])
    
    useEffect(() => {
        fetchMessages();
    }, [])
    console.log(sentMessage)
    
    const deleteFunction = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/${id}/delete/`)
        .then(() => {
            fetchMessages()
        })
        .catch(error => {console.log("Error", error)})
    }

    const sentMessageDiv = sentMessage.map((item) => {
        return(
            <Message 
                id = {item.id}
                senderName = {item.senderName}
                sentTime = {item.sentTime}
                senderMail = {item.senderMail}
                content = {item.content}
                handleDelete = {deleteFunction}
            />
        )
    })

    const value = () => {
        if(props.active === 1){
            if(messages.length > 0){
                return messages
            }
            else{
                return <Card text={"Inbox"}/>
            }
        }
        else if(props.active === 2){
            if(sentMessage.length > 0){
                return sentMessageDiv
            }
            else{
                return <Card text={"Sent"}/>
            }
        }
        else if(props.active === 3){
            return <Card text={"Starred"}/>
        }
        else if(props.active === 4){
            return <Card text={"Drafts"}/>
        }
        else if(props.active === 5){
            return <Card text={"Trash"}/>
        }
        else if(props.active === 6){
            return <Card text={"Spam"}/>
        }
    }
    const navOptions = ['Inbox','Sent','Starred','Drafts','Trash','Spam']
    return(
        <div className='outer-display-div'>
            <div className='display-title'>
                <div>{navOptions[props.active - 1]}</div>
                <div className='display-filter'><FontAwesomeIcon icon={faBars}/></div>
            </div>
            <div className='display-div'>
                {value()}
            </div>
        </div>
    )
}