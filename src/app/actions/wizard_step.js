import {PREV_STEP, NEXT_STEP, SET_STEP} from '../constants/const';

export function nextStep() {
    return {
          type: NEXT_STEP,
          payload: 1
        };
}

export function prevStep() {
    return {
          type: PREV_STEP,
          payload: -1
        };
}

export function setStep(param) {
      return {
            type: SET_STEP,
            payload: param
          };
}