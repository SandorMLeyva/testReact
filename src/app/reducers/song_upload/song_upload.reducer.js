import {SONG_SET_NAME} from '../../constants/const';

const initialState = {
    name: "",
    edad: 23
}

export default function setMetadataSong (state = initialState, action) {
  
  switch (action.type) {

  case SONG_SET_NAME:
    state = { 
      ...state,
          name: action.payload
    }
    break;

  }
  return state;
}
