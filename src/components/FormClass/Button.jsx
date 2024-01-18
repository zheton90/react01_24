import { Component, PureComponent, createRef } from "react";


export class Button extends PureComponent {
    constructor(props) {
        super(props)
        this.inerval = null
        this.state = {
            count: this.props.count,
        }
        this.myRef = createRef()
    }

    componentDidMount() {
        console.log('buttom did mount')
        // this.interval = setInterval(() => console.log(1), 1000)
        // this.myRef.current.addEventListener('click', () => {
        //     console.log('click')
        // })
    }

    componentDidUpdate(nextProps, nexState, snapshot) {
        console.log('button did update', snapshot)

    }

    componentWillUnmount() {
        console.log('button will unmount')
        // clearInterval(this.interval)
    }

    // shouldComponentUpdate(nextProps, nexState) {
    //     if (nextProps.count !== this.props.count) {
    //         return true
    //     }
    //     return false
    // }

    // static getDerivedStateFromProps(nextProps, state) {
    //     if (nextProps.count < 5) {
    //         return { count: nextProps.count }
    //     }
    //     return null
    // }

    // getSnapshotBeforeUpdate() {
    //     return { value: 999 }
    // }

    render() {
        return <>
            <p ref={this.myRef}>Count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
        </>
    }
}