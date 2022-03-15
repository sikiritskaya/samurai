const addMessage= 'ADD-MESSAGE'
const updateMessage = 'UPDATE-MESSAGE'

let initialState = {
   
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