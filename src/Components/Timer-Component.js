import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            bronze: 'https://i.imgur.com/7bVuUq7.jpg',
            silver: 'https://i.imgur.com/5fUKAiJ.jpg', 
            gold: 'https://i.imgur.com/g3WapOn.jpg',
            platinum: 'https://i.imgur.com/mwvRFBS.jpg',
            master: 'https://i.imgur.com/Kj6v6RT.jpg',
            grandMaster: 'https://i.imgur.com/xvs2acT.jpg'
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

        if(this.state.secondsElapsed >= 75) {
            this.rankBackground = this.state.grandMaster;
        } else if( this.state.secondsElapsed >= 60) {
            this.rankBackground = this.state.master;
        } else if( this.state.secondsElapsed >= 45) {
            this.rankBackground = this.state.platinum;
        } else if( this.state.secondsElapsed >= 30) {
            this.rankBackground = this.state.gold;
        } else if( this.state.secondsElapsed >= 15) {
            this.rankBackground = this.state.silver;
        } else {
            this.rankBackground = this.state.bronze;
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
                <img src={this.rankBackground} />
            </div>
        )
    }

}

export default Timer;
