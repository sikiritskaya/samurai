import style from './PersonMessage.module.css'

function PersonMessage(props) {
    return (
        <p>{props.message}</p>
    )
}

export default PersonMessage