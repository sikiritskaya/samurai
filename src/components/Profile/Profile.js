import style from './Profile.module.css'
import MyProfile from './MyProfile.js/MyProfile'
import MyPostsContainer from './Posts/MyPostsContainer'


function Profile(props){
    return(
        <div className={style.content}>
            <MyProfile profile={props.profile} />
            <MyPostsContainer store={props.store}  />
            
        </div>
    )
}
export default Profile