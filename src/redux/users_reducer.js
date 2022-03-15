const FOLLOW= 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_COUNT_USERS= 'TOTAL_COUNT_USERS'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let initialState = {
    users: [],
    totalCountUsers: 0,
    currentPage: 1,
    pageSize: 4,
    isPreloader: false
}
const usersPageReducer = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOW:
           return {...state,
            users: state.users.map(user=>{
                if(user.id === action.userID){
                    return {...user, followed: true}
                }
                return user
            }),
        }
        case UNFOLLOW:
           return {...state,
            users: state.users.map(user=>{
                if(user.id === action.userID){
                    return {...user, followed: false}
                }
                return user
            }),
        }
        case SET_USERS:
            return {...state,
            users:[...action.users]
        }
        case CURRENT_PAGE:
            return{...state,
            currentPage: action.currentPage
        }
        case TOTAL_COUNT_USERS:
            return{...state,
            totalCountUsers: action.totalCount 

            }
        case TOGGLE_PRELOADER:
            return{...state,
            isPreloader: action.isPreloader

            }
        default:
            return state
    }
}
const follow = (userID) =>({type: FOLLOW, userID})
const unfollow= (userID) => ({ type: UNFOLLOW, userID})
const setUsers = (users) => ({ type: SET_USERS, users})
const setCurrentPage = (page) => ({ type: CURRENT_PAGE, currentPage: page})
const setCountsAllUsers = (count) => ({ type: TOTAL_COUNT_USERS, totalCount: count})
const setPreloader = (isToggle) => ({ type: TOGGLE_PRELOADER, isPreloader: isToggle})
export default usersPageReducer
export {follow, unfollow, setUsers,setCurrentPage, setCountsAllUsers, setPreloader}