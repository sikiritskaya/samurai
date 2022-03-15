import {connect} from 'react-redux'
import { createActionNewText, createActionPost } from '../../../redux/profilepage_reducer';
import MyPosts from './MyPosts';

/* function MyPostsContainer(props){
    
    let state = props.store.getState()
    let addNewPost=()=>{
        props.store.dispatch(createActionPost())
    }
    let onChangePost=(post)=>{
        props.store.dispatch(createActionNewText(post))
    }
    return(
        <MyPosts postData={state.profilePage.postData} newText={state.profilePage.newText} createActionPost={addNewPost} createActionNewText={onChangePost} />
    )
} */
const mapStateToProps = (state) =>{
    return{
        postData: state.profilePage.postData,
        newText: state.profilePage.newText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createActionPost: ()=> dispatch(createActionPost()),
        createActionNewText: (post)=> dispatch(createActionNewText(post))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
