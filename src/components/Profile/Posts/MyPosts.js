import style from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'


function MyPosts(props){
    
    let result = props.postData.map(item=> <Post message ={item.message} key = {item.id} like={item.like} />
    )
    let newPost= React.createRef()
    let addNewPost=()=>{
        props.createActionPost()
    }
    let onChangePost=()=>{
        let post = newPost.current.value
        props.createActionNewText(post)
    }
    return(
        <div className={style.history_post}>
            <div>
                <input onChange={ onChangePost } placeholder='add new post' ref={newPost} value={ props.newText} type='text' /> 
                <button onClick={ addNewPost }>Publish</button>
            </div>
            { result }
        </div>
    )
}
export default MyPosts
