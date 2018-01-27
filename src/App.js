import React, { Component } from 'react';
import Timer from './Components/Timer-Component.js';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      dbUsers: [],
      dbUsersNames: [],
      updatedOnce: false
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

    fetch('/retrieveUsers')
      .then(res => res.json())
      .then(dbUsers => this.setState({ dbUsers }));
  }
  
  render() {

    let userNames = [];
    for (let i = 0; i < this.state.dbUsers.length; i++) {
      console.log('name', this.state.dbUsers[i]);
      userNames.push(<div>{this.state.dbUsers[i].firstname + ' ' + this.state.dbUsers[i].lastname}</div>);
    }

    return (
      <div className="App">
        <Timer/>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <h1>DB Users</h1>
          {userNames}
      </div>

    );
  }
}

export default App;
