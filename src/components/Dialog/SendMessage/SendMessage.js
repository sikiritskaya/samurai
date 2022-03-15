
import React from 'react'

function SendMessage(props){
    /* let newMes= React.createRef() */

    const sendNewMessage = () =>{
        props.createNewMessage()
    }
    const typeMessage = (e) =>{
        let post = e.target.value
        props.createTypeMessage(post)
    }
    return(
        <div>
            <input type='text' onChange={typeMessage} placeholder='add new message' value={ props.newMessage}></input>
            <button onClick={sendNewMessage}>Send</button>
        </div>
    )
}
export default SendMessage