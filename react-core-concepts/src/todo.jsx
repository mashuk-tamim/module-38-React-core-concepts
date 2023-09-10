// export default function Todo({task, isDone}){
//     return (
//         <div>
//             <li>{isDone} {task}</li>
//         </div>
//     )
// }

// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>Unfinished: {task}</li>
//         )
//     }
// }

// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <li>Finished: {task}</li>
//         )
//     }
//     return(
//         <li>Unfinished: {task}</li>
//     )
// }

// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone? 'Finished' : 'Unfinished'} : {task}</li>
//     )
// }

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Undone'}</li>
//     )
// }

export default function Todo({task, isDone}){
    return(
        <li>{isDone? '✅' : '❎'}  {task}</li>
    )
}