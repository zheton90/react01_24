
export const Child = ({ name, handelChangeCount }) => {

    const handelClick = () => {
        handelChangeCount(prevCount => prevCount + 1)
    }

    return <>
        <p>{name}</p>

        <button onClick={handelClick}>Click</button>
    </>
}