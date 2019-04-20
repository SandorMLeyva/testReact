import {CHANGE_NAME} from '../constants/const';

const initialState = {
    name: "sandor",
    edad: 23
}

export default function changeName (state = initialState, action) {
  
  switch (action.type) {

  case CHANGE_NAME:
    state = { 
      ...state,
          name: action.payload
    }
    break;

  }
  return state;
}
