import {NEXT_STEP, PREV_STEP, SET_STEP} from '../../constants/const';

const initialState = {
    step: 1
}

export default function wizardStep (state = initialState, action) {
  
  switch (action.type) {

    case NEXT_STEP:
        state = { 
            step: state.step + action.payload
            }
        break;

    case PREV_STEP:
        state = { 
            step: state.step > 1? state.step + action.payload: 1
            }
        break;

    case SET_STEP:
        state = { 
            step: action.payload > 1? action.payload: 1
            }
        break;
  }
  return state;
}
