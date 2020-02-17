import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import axios from "axios";
import { login } from "./ActionCreators/actions";
import { bindActionCreators } from "redux";

class App extends Component {
  state = { name: "Aditya", email: "dsd" };

   signIn = () => {
     let user = axios({
       method: "post",
       url: "http://localhost:3010/user",
       data: {
        "user": {
          "name": this.state.name,
          "email": this.state.email
        }
      }
     })
     this.props.login();
    //  user.then(res => {
    //    console.log("Axios response", res);
    //    this.props.dispatch({
    //      type: "LOGIN",
    //      payload: res.data.data[0]
    //    })
    //   }).catch((err, res) => {
    //     console.log("Axios error response", err.response);
    //  })
   }

  render() {
    console.log("App props", this.props);
    return (
      <div className="App">
        {
          !this.props.isLoggedIn && (
            <div>
              <input type="text" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})} />
              <input type="text" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
              <button onClick={() => this.signIn()}>Sign In</button>
            </div>
          )
        }
        {
          this.props.isLoggedIn && (
            <div>
              You're logged in now
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("100% redux state", state);
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
