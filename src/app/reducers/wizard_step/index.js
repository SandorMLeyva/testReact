import {NEXT_STEP, PREV_STEP, SET_STEP} from '../../constants/const';

const initialState = {
    step: 0
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
            step: state.step > 0? state.step + action.payload: 0
            }
        break;

    case SET_STEP:
        state = { 
            step: action.payload > 0? action.payload: 0
            }
        break;
  }
  return state;
}
