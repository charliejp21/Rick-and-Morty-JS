import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types"

const initialState = {

    myFavorites: []

}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_FAVORITE:
            return{

                ...state,
                myFavorites: [...state.allCharacters, action.payload]

            }
            
        case DELETE_FAVORITE:
            return{

                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }

        case FILTER:
            const {allCharacters} = state ;
            const allCharsFiltered =  

        default: 

             return {...state}


    }

}

export default reducer