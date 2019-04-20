const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

        case typeName:
            state = { 
                ...state
                //aqui poner las propiedades de state
            };
            break;
        
        }
    return state;
}


