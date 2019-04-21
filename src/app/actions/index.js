
// export function exampleAction(param){
//   return {
//     type: 'CONSTANT',
//     payload: param
//   };
// }

// // Async action
// //promise
// function exampleAsyncActionPromise(params) {
//     return {
//         type: 'CONSTANT',
//         payload: new Promise((resolve, reject) => {
//           resolve(params);
//         })
        
//     }
// }
// //dispatch
// function exampleAsyncAction(params) {
//     return dispatch => {
//         setTimeout(()=>{
//             dispatch({
//                 type: 'CONSTANT',
//                 payload: params
//             })
//         });
//     }
// }

import {
  CHANGE_NAME, 
  SONG_SET_NAME, 
  SONG_EMAIL_LOCATOR, 
  SONG_PHONE_LOCATOR, 
  IMG_EMAIL_LOCATOR, 
  IMG_LINK_LOCATOR,
  IMG_PHONE_LOCATOR
} from '../constants/const';


export function changeName(params) {
  return {
        type: CHANGE_NAME,
        payload: params
      };
}

export function songSetName(params) {
  return {
        type: SONG_SET_NAME,
        payload: params
      };
}

export function songSetAuthor(params) {
  return {
        type: SONG_SET_AUTHOR,
        payload: params
      };
}

export function songSetEmailLocator(params) {
  return {
        type: SONG_EMAIL_LOCATOR,
        payload: params
      };
}


export function songSetPhoneLocator(params) {
  return {
        type: SONG_PHONE_LOCATOR,
        payload: params
      };
}

export function imgSetEmailLocator(params) {
  return {
        type: IMG_EMAIL_LOCATOR,
        payload: params
      };
}

export function imgSetPhoneLocator(params) {
  return {
        type: IMG_PHONE_LOCATOR,
        payload: params
      };
}

export function imgSetLinkLocator(params) {
  return {
        type: IMG_LINK_LOCATOR,
        payload: params
      };
}
