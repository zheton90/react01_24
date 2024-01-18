import { memo, useEffect, useState } from "react"

export const Button = memo(({ value, ChangeCount }) => {

    const [count, setCount] = useState(0)
    console.log('render button', value)

    useEffect(() => {
        // const interval = setInterval(() => console.log(1), 1000)
        // console.log('5')

        // return () => {
        //     clearInterval(interval)
        // }
    }, [])


    return <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </>
})
    // ((prevProps, nextProps) => {
    //     if (prevProps.value !== nextProps.value) {
    //         return true
    //     }

    //     return false
    // })