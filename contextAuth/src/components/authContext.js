import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      isAuthenticated: false,
    };
  }

  LogIn = () => {
    this.setState({
      username: "test",
      isAuthenticated: true,
    });
  };

  LogOut = () => {
    this.setState({
      username: "",
      isAuthenticated: false,
    });
  };

  render() {
    const { username, isAuthenticated } = this.state;
    const { LogIn, LogOut } = this;

    return (
      <AuthContext.Provider
        value={{ username, isAuthenticated, LogIn, LogOut }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthProvider };

export default AuthContext;
