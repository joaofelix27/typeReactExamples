// //Sem Children
// export default function SpanText ({text}: {text:string}){
//     return <span>{text}</span>
// }

//Com children
export default function SpanText ({children}: {children:string}){
    return <span>{children}</span>
}

// SpanText.defaultProps = {
//     children: "Teste Padrão"
// }

// Type of e &&