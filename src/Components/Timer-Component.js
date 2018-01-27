import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        }
    }

    tick() {
        if( document.hasFocus() ) {
            this.setState((prevState) => ({
                secondsElapsed: prevState.secondsElapsed + 1
            }));
        } else {
            //do nothing
        }
    }

    timeFormat(time) {
        let hours = Math.floor(time/3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        let results = '';

        if(hours > 0) {
            results += '' + hours + ':' + (minutes < 1 ? '0' : '');
        }

        results += '' + minutes + ':' + (seconds < 10 ? '0': '');
        results += '' + seconds;
        return results
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2> Jong's Timer </h2>
                <p> {this.timeFormat(this.state.secondsElapsed)} </p>
                <p id="message"></p>
            </div>
        )
    }

}

export default Timer;
