import React from "react";
import {Component} from "react";
import "./sytle.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            btn: 'Start'
        }

        this.time = null;
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start() {
        let state = this.state;

        if (this.time !== null) {
            clearInterval(this.time);

            this.time = null;

            state.btn = 'Start';
        } else {
            this.time = setInterval(() => {
                let state = this.state;

                state.number += 0.1;

                this.setState(state);

                state.btn = 'Stop'
            }, 100);
        }

        this.setState(state);
    }

    clear() {
        let state = this.state;

        if (this.time !== null) {
            clearInterval(this.time);

            this.time = null;
        }

        state.number = 0;
        state.btn = 'Start';
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/cronometro.png')} alt="cronometro" className="img" />

                <a className="time"> { this.state.number.toFixed(1) } </a>

                <div className="btnArea">
                    <a className="btn" onClick={ this.start } > { this.state.btn } </a>

                    <a className="btn" onClick={ this.clear } > Clear </a>
                </div>
            </div>
        );

    }
}

export default App;