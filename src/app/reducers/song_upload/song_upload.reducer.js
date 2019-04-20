import { SONG_SET_NAME, SONG_EMAIL_LOCATOR, SONG_PHONE_LOCATOR } from '../../constants/const';

const initialState = {
  upload_state: 1,
  name: "",
  email_locator: "",
  phone_locator: "",
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

    case SONG_EMAIL_LOCATOR:
      state = {
        ...state,
        email_locator: action.payload.email,
        upload_state: action.payload.upload_state

      }
      break;

    case SONG_PHONE_LOCATOR:
      state = {
        ...state,
        phone_locator: action.payload.phone,
        upload_state: action.payload.upload_state

      }
      break;
  }
  return state;
}
