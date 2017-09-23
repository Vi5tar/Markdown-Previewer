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
    {
      document.getElementById("content").innerHTML = marked(this.state.input);
    }
    return React.createElement(
      "div",
      null,
      React.createElement("textarea", { value: this.state.input, onChange: this.handleInput })
    );
  }
}

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("markdownPreview"));