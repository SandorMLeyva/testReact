import {
  SONG_SET_NAME,
  SONG_SET_AUTHOR,
  SONG_EMAIL_LOCATOR,
  SONG_PHONE_LOCATOR,
  IMG_EMAIL_LOCATOR,
  IMG_LINK_LOCATOR,
  IMG_PHONE_LOCATOR,
  ADD_COLABORATOR
} from '../../constants/const';

const initialState = {
  upload_state: 1,
  name: "",
  author: true,
  song_email_locator: "",
  song_phone_locator: "",
  img_email_locator: "",
  img_phone_locator: "",
  img_link_locator: "",
  colaborators: []
}

export default function setMetadataSong(state = initialState, action) {

  switch (action.type) {

    case SONG_SET_NAME:
      state = {
        ...state,
        name: action.payload.name,
        upload_state: action.payload.upload_state
      }
      break;

    case SONG_SET_AUTHOR:
      state = {
        ...state,
        author: action.payload.author,
        upload_state: action.payload.upload_state

      }
      break;


    case SONG_EMAIL_LOCATOR:
      state = {
        ...state,
        song_email_locator: action.payload.email,
        upload_state: action.payload.upload_state

      }
      break;

    case SONG_PHONE_LOCATOR:
      state = {
        ...state,
        song_phone_locator: action.payload.phone,
        upload_state: action.payload.upload_state

      }
      break;

    case IMG_EMAIL_LOCATOR:
      state = {
        ...state,
        img_email_locator: action.payload.img_email_locator,
        upload_state: action.payload.upload_state

      }
      break;

    case IMG_LINK_LOCATOR:
      state = {
        ...state,
        img_link_locator: action.payload.img_link_locator,
        upload_state: action.payload.upload_state

      }
      break;

    case IMG_PHONE_LOCATOR:
      state = {
        ...state,
        img_phone_locator: action.payload.img_phone_locator,
        upload_state: action.payload.upload_state

      }
      break;
    case ADD_COLABORATOR:
      state = {
        ...state,
        colaborators: [...state.colaborators].push(10),
        // colaborators: [...state.colaborators, action.colaborator] ,
        upload_state: action.payload.upload_state

      }
      break;


  }
  return state;
}
