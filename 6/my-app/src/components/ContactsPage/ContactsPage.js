import { useState } from "react"


export default function ContactsPage () {

    const [text, setText] = useState('')

   

    

    return(
        <>
         <input
          onChange={e => setText(e.target.value)}
           type="text"
           onBlur={e => setText(e.target.value="")}
           />
           <button onClick={e => setText(e.target.value)}>click</button>
        </>
    )
}