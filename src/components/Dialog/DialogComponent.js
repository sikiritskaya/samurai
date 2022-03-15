import {connect} from 'react-redux'
import Dialog from './Dialog'
import { createActionMessage, createActionNewMessage } from "../../redux/messagepage_reducer"
/* function DialogComponent(props) {
    let state = props.store.getState()
    return(
        <Dialog data={state.messagePage} store={props.store} />
    )
   
} */

const mapStateToProps =(state)=>{
    return {
        data: state.messagePage
    }
}
const mapDispatchToProps =(dispatch)=>{
    
    return{
        createTypeMessage: (post)=>dispatch(createActionNewMessage(post)),
        createNewMessage: ()=>dispatch(createActionMessage())
    }
}
const DialogComponent = connect(mapStateToProps,mapDispatchToProps)(Dialog)
export default DialogComponent