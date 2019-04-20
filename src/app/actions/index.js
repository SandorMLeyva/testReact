
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

import {CHANGE_NAME, SONG_SET_NAME} from '../constants/const';


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

