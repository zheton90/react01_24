import React from "react"

export class Count extends React.Component {
    state = {
        count: 1

    }

    handelClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        console.log(this.props.count)
        return <>
            <p>CountState: {this.state.count}</p>
            <p>CountPrtops: {this.props.count}</p>
            <button type="button" onClick={this.handelClick}>click</button>

        </>
    }
}