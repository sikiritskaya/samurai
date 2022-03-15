import { createActionMessage, createActionNewMessage } from "../../../redux/messagepage_reducer"
import {connect} from 'react-redux'
import SendMessage from "./SendMessage"

/* function SendMessageComponent(props){
    //let state = props.store.getState()
    
    const sendMessage = () =>{
        props.store.dispatch(createActionMessage())
    }
    const typeNewMessage = (post) =>{
        props.store.dispatch(createActionNewMessage(post))
    }
    return(
        < SendMessage createTypeMessage = {typeNewMessage} createNewMessage={sendMessage} />

    )
} */

const mapDispatchToProps =(dispatch)=>{
    return{
        createTypeMessage: (post)=>dispatch(createActionNewMessage(post)),
        createNewMessage: ()=>dispatch(createActionMessage())
    }
}
const SendMessageComponent = connect(mapDispatchToProps)(SendMessage)

export default SendMessageComponent