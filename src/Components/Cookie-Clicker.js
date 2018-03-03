import React, { Component } from 'react';

class CookieClicker extends Component {
    constructor(props) {
        super(props);
        this.cookiePicture = 'https://i.imgur.com/vY5BRa2.png';
        this.state = {
            numOfClicks: 0,
            cookie1: 'https://i.imgur.com/vY5BRa2.png',
            cookie2: 'https://i.imgur.com/ywJeCKc.png',
            cookie3: 'https://i.imgur.com/lIBOUmU.png',
            cookie4: 'https://i.imgur.com/pqkMxNu.png',
            cookie5: 'https://i.imgur.com/547SPCW.png',
            cookie6: 'https://i.imgur.com/3C7FWXG.png',
            cookie7: 'https://i.imgur.com/BIt9NN3.png',
            cookie8: 'https://i.imgur.com/AyNWLne.png',
            cookie9: 'https://i.imgur.com/oiewtvY.png',
            cookie10: 'https://i.imgur.com/uGdDOop.png'

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
            case 400:
                this.cookiePicture = this.state.cookie9;
                break;
            case 450:
                this.cookiePicture = this.state.cookie10;
                break;
        }
    }

    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h2> COOKIE CLICKER </h2>
                <p> {this.state.numOfClicks} </p>
                <br/>
                <img src={this.cookiePicture} onClick={this.click.bind(this)}/>
                
            </div>
        )
    }

}

export default CookieClicker;
