import style from './Users.module.css'
/* import * as axios from 'axios' */
import userPhoto from '../../assets/images/user.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Users(props) {
    let countPages = Math.ceil(props.totalCountUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={style.button_page}>
                {pages.map(page => {
                    return <span key={page.id} onClick={() => props.onPageChanges(page)} className={(props.currentPage === page && style.selected) || style.pagination}>{page}</span>
                })
                }

            </div>
            {
                props.users.map(user => <div className={style.users} key={user.id}>
                    <div className={style.left_side}>
                        <NavLink to={'/profile/' + user.id }>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='user'></img>
                        </NavLink>
                        <div>
                            {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.right_side}>
                        <div className={style.block}>
                            <p>{user.name}</p>
                            <p>{user.status}</p>
                        </div>
                        <div className={style.block}>
                            <p>{'user.location.city'},</p>
                            <p>{'user.location.country'}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users
/* function Users(props) {
    const getUsers = async()=>{
        let URL_USERS = 'https://social-network.samuraijs.com/api/1.0/users'
        const res = await fetch(URL_USERS)
        const data = await res.json()
        props.setUsers(data.items)
    }
   
    if(props.users.length === 0){
        /* axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>{
            props.setUsers(res.data.items)
        }) */
 //       getUsers()
//    }
   /*  return <div>
        {
            props.users.map(user => <div className={style.users} key={user.id}>
                <div className={style.left_side}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}></img>
                    <div>
                        { user.followed ? <button onClick={()=> props.unfollow(user.id)}>Unfollow</button> : <button onClick={()=>props.follow(user.id)}>Follow</button>}
                    </div>
                </div>
                <div className={style.right_side}>
                    <div className={style.block}>
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div className={style.block}>
                        <p>{'user.location.city'},</p>
                        <p>{'user.location.country'}</p>
                    </div>
                </div>
                
                
                
            </div>
            )
        }
    </div>
} */ 
