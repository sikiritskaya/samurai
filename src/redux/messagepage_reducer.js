const addMessage= 'ADD-MESSAGE'
const updateMessage = 'UPDATE-MESSAGE'

let initialState = {
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

}
const messagePageReducer =(state = initialState, action) =>{
    switch(action.type){
        case updateMessage:
            return{...state,
                newMessage: action.text
            }
        case addMessage:
            return{...state,
            newMessage: '',
            messageData: [...state.messageData,{
                id: 7,
                message: state.newMessage
            }]
            }       
        default:
            return state
    }
}
const createActionMessage = () =>({type: addMessage})
const createActionNewMessage = (post) => ({ type: updateMessage, text: post})
export default messagePageReducer
export{ createActionMessage, createActionNewMessage}