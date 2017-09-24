class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n*[Travis Swiers](https://github.com/Vi5tar)*"
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
      React.createElement("textarea", { id: "inputText", value: this.state.input, onChange: this.handleInput })
    );
  }
}

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("textBox"));