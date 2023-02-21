import { ARCHIVED_CONTACT, FILTER_CONTACTS, GET_CONTACTS } from "../actions/constants"

const initialState = {
    contacts: [],
    allContacts: [],
    archived: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                allContacts: action.payload,
            }

        case ARCHIVED_CONTACT:
            const contact = state.contacts.find(c => c.id === action.payload.id)
            contact.archived = !contact.archived
            return {
                ...state,
                archived: [...state.archived, action.payload],
                contacts: state.contacts.map(e => e),
                allContacts: state.contacts.map(e => e)
            }

        case FILTER_CONTACTS:
            let filter = []
            if(action.payload === 'all'){
                filter = state.allContacts
            } else {
                    filter = state.allContacts.filter(e => e.archived === true)
                }
            return {
                    ...state,
                    contacts: filter
                }
           
        
            default:
            return state
    }
}
export default contactsReducer