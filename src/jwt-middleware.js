// export default ({ dispatch }) => next => action => {
//     if (!action.payload || !action.payload.then) {
//         console.log("response next : " , action);
//         return next(action);
//     }
//     action.payload.then(function (response) {
//         console.log("response : " , response);
//         const newAction = { ...action, payload: response };
//         dispatch(newAction);
//     });
// }