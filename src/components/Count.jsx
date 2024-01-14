import { useState } from "react"


export const Count = () => {

    const [count, setCount] = useState(1)

    const handelClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return <>

        <p>CountState: {count}</p>
        <button type="button" onClick={handelClick}>click</button>

    </>
}