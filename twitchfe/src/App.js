import logo from "./logo.svg";
import "./App.css";
import React from "react";


let intervalID = "";


class Child extends React.Component {
  componentDidMount() {
    // intervalID = setInterval(() => {
    //   console.log("interval");
    // }, 1000);
    console.log("Child Did Mount");
  }


  componentWillUnmount() {
    // clearInterval(intervalID);
    // console.log("child will unmount");
  }


  render() {
    return <div>Child Component</div>;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("app constructor");
  }


  componentDidMount() {
    console.log("app did mount");
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("app did update prevProps", prevProps);
    console.log("app did update prevState", prevState);
    console.log("app did update");
  }


  state = {
    showChild: true,
  };


  handleClick = () => {
    this.setState({
      showChild: !this.state.showChild,
    });
  };


  render() {
    console.log("app render");
    return (
      <>
        <button onClick={this.handleClick}>toggle child</button>
        {this.state.showChild && <Child />}
      </>
    );
  }
}


export default App;
