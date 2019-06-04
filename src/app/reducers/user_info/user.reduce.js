import {CHANGE_NAME} from '../../constants/const';

const initialState = {
    name: "sandor",
    first_lastname: "martin",
    second_lastname: "leyva",
    age: 23,
    hash_facebook: "",
    hash_twiter: "",
    hash_google: ""
}

export default function user (state = initialState, action) {
  
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
