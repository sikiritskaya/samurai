import {connect} from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setCountsAllUsers, setPreloader } from "../../redux/users_reducer"
import Users from './Users'
import React from 'react'
import Preloader from '../CommonComponents/Preloader'

class UsersComp extends React.Component{
    componentDidMount(){
        this.props.setPreloader(true)
        const getUsers = async()=>{
            let URL_USERS = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            const res = await fetch(URL_USERS)
            const data = await res.json()
            this.props.setPreloader(false)
            this.props.setUsers(data.items)
            this.props.setCountsAllUsers(data.totalCount)
        }
        getUsers()
    }
    onPageChanges = (page)=> {
        this.props.setPreloader(true)
        this.props.setCurrentPage(page)
        const getCurrentPage = async()=>{
            let URL_USERS = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            const res = await fetch(URL_USERS)
            const data = await res.json()
            this.props.setPreloader(false)
            this.props.setUsers(data.items)
        }
        getCurrentPage()
    }
    render(){
        return<> 
            <div>
                {this.props.isPreloader ? <Preloader /> : null}
            </div>
            <div>
                <Users totalCountUsers = {this.props.totalCountUsers}
                    currentPage= {this.props.currentPage}
                    pageSize= {this.props.pageSize}
                    onPageChanges = {this.onPageChanges}
                    users = {this.props.users}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                />
            </div>
        </>
    }
}
const mapStateToProps =(state)=>{
    return {
        users: state.usersPage.users,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isPreloader: state.usersPage.isPreloader
    }
}
/* const mapDispatchToProps =(dispatch)=>{
    
    return{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setCountsAllUsers,
        setPreloader
    }
} */
const UsersComponent = connect(mapStateToProps,{follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setCountsAllUsers,
    setPreloader})(UsersComp)
export default UsersComponent