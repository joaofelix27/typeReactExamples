
// 1
// export default function Title ({text} : {text: string} ) {

import React from "react";

//     return <h1>Esse é o seu título: {text}</h1>
// }

// 2
// type titleProps = {
//     text:{
//         firstText: string,
//         secondText: string
//     }
// }
// export default function Title ({text} : titleProps ) {

//     return <h1>Esse é o seu título: {`${text.firstText} ${text.secondText}`} </h1>
// }

export default function Title ({text} : {text: React.ReactNode} ) {

    return <h1>{text}</h1>
}