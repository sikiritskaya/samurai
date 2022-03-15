import style from './Post.module.css'

function Post(props){
    return(
        <div className={style.item}>
            <div>
                <img src='https://w-dog.ru/wallpapers/13/17/432077332660143/korobka-smajlik-galstuk.jpg' alt='avatar'></img>
                <span>{props.message}</span>
            </div>
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    )
}
export default Post