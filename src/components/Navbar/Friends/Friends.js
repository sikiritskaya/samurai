import Friend from './Friend/Friend'
import style from './Friends.module.css'
function Friends(props) {
    let result = props.friends.map(item=> <Friend name = {item.name} key = {item.id}/>)
    return (
        <div>
            <h3>Friends</h3>
            <div className={style.box_friends}>
               {result}
            </div>
        </div>
    )
}
export default Friends