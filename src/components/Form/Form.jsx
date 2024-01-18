import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "./Button"

export const Form = () => {

    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(true)
    const buttonE1 = useRef(null)
    const handelChangeCount = useCallback(() => {
        setCount(count + 1)
    }, [])

    useEffect(() => {
        console.log('ref', buttonE1)
    }, [])

    return <>
        <h4>Parent Component</h4>
        <p>{count}</p>
        <button ref={buttonE1} onClick={() => setCount(count + 1)}>+1</button>
        <br />
        <button onClick={() => setVisible(!visible)}>{visible ? 'hidden' : 'visible'}</button>

        <h4>Child Component</h4>

        {visible && < Button value={0} ChangeCount={handelChangeCount} />}
    </>
}