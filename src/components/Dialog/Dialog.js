
import style from './Dialog.module.css'
import DialogPerson from './DialogPerson/DialogPerson'
import PersonMessage from './PersonMessage/PersonMessage'




function Dialog(props) {
    const sendNewMessage = () => {
        props.createNewMessage()
    }
    const typeMessage = (e) => {
        let post = e.target.value
        props.createTypeMessage(post)
    }
    let names = props.data.nameData.map(n => {
        return <DialogPerson name={n.name} key={n.id} />
    })
    let messages = props.data.messageData.map(m => <PersonMessage message={m.message} key = {m.id}/>)
    return (
        <div className={style.all_dialogs}>
            <div className={style.all_dialogs_name}>
                {names}
            </div>
            <div className={style.person_message}>
                {messages}
                <div>
                    <input type='text' onChange={typeMessage} placeholder='add new message' value={props.data.newMessage}></input>
                    <button onClick={sendNewMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}
export default Dialog