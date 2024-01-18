import { Component, } from "react";
import { Button } from "./Button";
import { Input } from "./Input";


export class Form extends Component {
    state = {
        visible: true,
        name: 'jin',
        count: 0,

    }

    componentDidMount() {
        console.log('did mount form')
    }

    handelVisible = () => {
        this.setState({ visible: !this.state.visible })
    }

    handelChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handelChangeCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return <>
            <h2>Parent Component</h2>
            <button onClick={this.handelVisible}>{this.state.visible ? 'hidden' : 'visible'}</button><br />
            <p>{this.state.count}</p>
            <button onClick={this.handelChangeCount}>count + 1</button>
            <h2>Child Component</h2>
            {this.state.visible && <Button count={this.state.count} />}
            <br />
            <p>Name: {this.state.name}</p>
            <Input value={this.state.name} change={this.handelChangeName} />
        </>
    }
}