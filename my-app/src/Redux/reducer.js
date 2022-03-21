const initialState = []

export const userReducer = (state = initialState , action) => {
    switch(action.type){ 
        case  'FETCHING': 
                        return {
                            ...state,
                            ...action.payload
                        }

        default : return state;
             
    }
}