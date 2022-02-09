export const initialState = new Map();

export type ActionType = 
    | { type: 'Number added' , payload: string}
    | { type: 'Reset list' }


export const listReducer = ( state: typeof initialState, action: ActionType ) => {

    switch ( action.type ) {
        case 'Number added':
            
            let aRet = new Map(state);


            if(!state.get(action.payload)){
                aRet.set(action.payload,1)
            }else{
                const c = state.get(action.payload);
                aRet.set(action.payload,c+1);
            };
        
            return aRet;
        
        case 'Reset list':

            let vide = new Map();

            return vide;
    
        default:
            return state;
    }
}
