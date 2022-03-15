import messagePageReducer from "./messagepage_reducer"
import profilPageReducer from "./profilepage_reducer"
import sidebarReducer from "./sidebar_reducer"

const store={
    _callSubscriber(){
        console.log('no changes')
    },
    _state: {
        profilePage: {
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
            newText: ''
        },
        messagePage: {
            nameData: [
                {
                    id: 1,
                    name: 'Alex'
                },
                {
                    id: 2,
                    name: 'Kris'
                },
                {
                    id: 3,
                    name: 'Anna'
                },
                {
                    id: 4,
                    name: 'John'
                }
            ],
            messageData: [
                {
                    id: 1,
                    message: 'Hi dude!!!'
                },
                {
                    id: 2,
                    message: 'How is it gone?'
                },
                {
                    id: 3,
                    message: 'What the next?'
                }, {
                    id: 4,
                    message: 'Hi dude!!!'
                },
                {
                    id: 5,
                    message: 'How is it gone?'
                },
                {
                    id: 6,
                    message: 'What the next?'
                }
            ],
            newMessage: ''

        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Nick'
                },
                {
                    id: 2,
                    name: 'Mike'
                },
                {
                    id: 3,
                    name: 'Luka'
                },
            ]
        }
    },
    getState(){
        return this._state
    },
    subscribe(observer){
           this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profilPageReducer(this._state.profilePage, action)
        this._state.messagePage = messagePageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
       

}

export default store