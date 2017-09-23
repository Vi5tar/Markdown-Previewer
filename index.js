class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { value: this.state.input, onChange: this.handleInput }),
      React.createElement(
        "p",
        null,
        this.state.input
      )
    );
  }
};

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("markdownPreview"));