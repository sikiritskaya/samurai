import { combineReducers, createStore } from "redux";
import messagePageReducer from "./messagepage_reducer"
import profilPageReducer from "./profilepage_reducer"
import sidebarReducer from "./sidebar_reducer"
import usersPageReducer from "./users_reducer";
let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer
})
let store = createStore(reducers)
window.store = store
export default store