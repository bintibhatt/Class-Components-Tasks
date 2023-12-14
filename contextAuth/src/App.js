import { Component } from "react";
import "./App.css";
import AuthContext, { AuthProvider } from "./components/authContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Child />
          {/* <Child2 /> */}
        </AuthProvider>
      </div>
    );
  }
}

class Child extends Component {
  static contextType = AuthContext;

  handleClick = () => {
    const { isAuthenticated, LogIn, LogOut } = this.context;
    if (isAuthenticated) {
      LogOut();
    } else {
      LogIn();
    }
  };

  render() {
    const { username, isAuthenticated } = this.context;
    return (
      <div className="Child">
        <h3>User: {username}</h3>
        <h3>
          isAuthenticated:{" "}
          {isAuthenticated ? "Authenticated" : "Not Authenticated"}
        </h3>
        <button onClick={this.handleClick}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        {/* <button onClick={LogOut}>Log Out</button> */}
      </div>
    );
  }
}

// Child.contextType = AuthContext;

// class Child2 extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(props) => {
//           const { username, isAuthenticated, LogIn, LogOut } = props;
//           return (
//             <div className="Child">
//               <h3>User: {username}</h3>
//               <h3>
//                 isAuthenticated:{" "}
//                 {isAuthenticated ? "Authenticated" : "Not Authenticated"}
//               </h3>
//               <button onClick={LogIn}>Log In</button>
//               <button onClick={LogOut}>Log Out</button>
//             </div>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

export default App;
