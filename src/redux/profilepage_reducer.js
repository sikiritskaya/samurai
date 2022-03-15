const addPost= 'ADD-POST'
const updateText = 'UPDATE-TEXT'
const SET_PROFILE ='SET_PROFILE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
let initialState = {
    postData: [
        {
            id: 1,
            message: 'Look nice',
            like: '3'
        },
        {
            id: 2,
            message: 'Long time no see',
            like: '5'
        },
    ],
    newText: '',
    profile: null,
    isPreloader: false
}
const profilPageReducer = (state = initialState, action) =>{
    switch(action.type){
        case addPost:
           return {...state,
            postData: [...state.postData,{
                id: 5,
                message: state.newText,
                like: 9
            }],
            newText:''
        }
        case updateText:
           return {...state,
            newText: action.text
        }
        case SET_PROFILE:
            return {...state,
            profile: action.profile
            }
        case TOGGLE_PRELOADER:
            return{...state,
            isPreloader: action.isPreloader
            }
        default:
            return state
    }
}
const createActionPost = () =>({type: addPost})
const createActionNewText = (post) => ({ type: updateText, text: post})
const setProfile = (profile) => ({ type: SET_PROFILE, profile})
const setPreloader = (isToggle) => ({ type: TOGGLE_PRELOADER, isPreloader: isToggle})
export default profilPageReducer
export {createActionPost, createActionNewText, setProfile, setPreloader}