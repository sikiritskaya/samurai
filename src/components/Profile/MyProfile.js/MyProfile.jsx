import style from './MyProfile.module.css'
import Preloader from '../../CommonComponents/Preloader'

function MyProfile(props){

    if(!props.profile){
        return <Preloader />
    }
    return(
        
        <div>
            <div className={style.image_back}>
                <img src='https://phonoteka.org/uploads/posts/2021-06/1624412197_27-phonoteka_org-p-panoramnie-oboi-krasivo-36.jpg' alt='img'></img>
            </div>
            <div className={style.avatar}>
                <img src={props.profile.photos.large} alt='avatar'></img>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default MyProfile