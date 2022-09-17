import React, { Component } from "react";
import Confirm from "./Confirm";
import logo from "./logo.svg";
import "./App.css";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}
class App extends Component<{}, IState> {
  private timer: number = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "Please hit the confirm button",
      confirmVisible: true,
      countDown: 10,
    };
  }
  private handleCancelConfirmClick = () => {
    this.setState({ confirmOpen: false });
    clearInterval(this.timer);
  };

  private handleOkConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: "Cool, Carry on Reading",
    });
    clearInterval(this.timer);
  };

  private handleConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: "Take a break, I'm sure you will .....",
    });
    clearInterval(this.timer);
  };

  private handleTimerTick() {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${this.state.countDown} secs to go`,
        countDown: this.state.countDown - 1,
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            confirmMessage: "Too late to confirm!",
            confirmVisible: false,
          });
        }
      }
    );
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
  }
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
        {this.state.confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>
        )}
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
