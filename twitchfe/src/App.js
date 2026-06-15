import logo from "./logo.svg";
import "./App.css";
import React from "react";


class Child extends React.Component {
  render() {
    return <div>count from parent component: {this.props.num}</div>;
  }
}


class App extends React.Component {
  state = {
    count: 0,
    x: 5,
  };


  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };


  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>plus one</button>
        <Child num={this.state.count} />
      </>
    );
  }
}


export default App;



