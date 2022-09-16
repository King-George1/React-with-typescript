import React, { Component } from "react";
import Confirm from "./Confirm";
import logo from "./logo.svg";
import "./App.css";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
}
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: true,
      confirmMessage: "Please hit the confirm button",
    };
  }
  private handleCancelConfirmClick = () => {
    this.setState({ confirmOpen: false });
  };

  private handleOkConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: "Cool, Carry on Reading",
    });
  };

  private handleConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: "Take a break, I'm sure you will .....",
    });
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and TypeScript
          </a>
        </header>
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm
          title="React and TypeScript"
          content="Are you sure you want to learn react and typescript?"
          cancelCaption="No way"
          okCaption="Yes please!"
          onCancelClick={this.handleCancelConfirmClick}
          onOkClick={this.handleOkConfirmClick}
          open={this.state.confirmOpen}
        />
      </div>
    );
  }
}

export default App;
