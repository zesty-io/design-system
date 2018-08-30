import React from "react";
import ReactQuill from "react-quill";

export class QuillFieldType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.default || ""
    };
  }

  onEditorStateChange = text => {
    if (this.props.callback) {
      this.props.callback(text);
    }
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;
    return (
      <React.Fragment>
        <div>
          <label>{this.props.label}</label>
        </div>
        <ReactQuill value={text} onChange={this.onEditorStateChange} />
      </React.Fragment>
    );
  }
}
