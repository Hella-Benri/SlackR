import React, { Component } from 'react';

class CookieClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfClicks: 0,
            cookie1: '',
            cookie2: '',
            cookie3: '',
            cookie4: '',
            cookie5: '',
            cookie6: '',
            cookie7: '',
            cookie8: '',
            cookie9: '',
            cookie10: ''

        }

    }

    click() {
        this.setState((prevState) => ({
            numOfClicks: prevState.numOfClicks + 1
        }));

        switch (this.state.numOfClicks) {
            case 50:
                this.cookiePicture = this.state.cookie2;
                break;
            case 100:
                this.cookiePicture = this.state.cookie3;
                break;
            case 150:
                this.cookiePicture = this.state.cookie4;
                break;
            case 200:
                this.cookiePicture = this.state.cookie5;
                break;
            case 250:
                this.cookiePicture = this.state.cookie6;
                break;
            case 300:
                this.cookiePicture = this.state.cookie7;
                break;
            case 350:
                this.cookiePicture = this.state.cookie8;
                break;
            case 350:
                this.cookiePicture = this.state.cookie9;
                break;
            case 350:
                this.cookiePicture = this.state.cookie10;
                break;
        }
    }

    
    componentDidMount() {
        let cookiePicture = this.state.cookie1
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2> COOKIE CLICKER </h2>
                <p> {this.state.numOfClicks} </p>
                <img src={this.rankBackground} />
                <button type="button" onClick={this.click.bind(this)}> CLICK ME </button>
            </div>
        )
    }

}

export default CookieClicker;
