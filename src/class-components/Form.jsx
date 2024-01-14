import React from "react";

export class Form extends React.Component {
    state = {
        name: 'Zhenya',
        arr: ['ivanov', 'petrov', 'sidorov']
    }

    handelChangeName = (ev) => {
        this.setState({ name: '1' })
        this.setState({ name: '2' })

    }

    handelSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.state.name)
    }

    render() {
        return <form onSubmit={this.handelSubmit}>
            {this.state.arr.map((item, idx) => {
                return <div key={idx}>{item}</div>
            })}
            <p>{this.state.name}</p>
            <input type='text' onChange={this.handelChangeName} />
            <button>Send Form</button>

        </form>
    }
}