// inputEmoji using context

import { Component } from "react";

class InputEmoji extends Component {
  getEmojiTitle = (event) => {
    this.props.getEmojiTitle(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Emoji"
          onChange={this.getEmojiTitle}
        />
      </div>
    );
  }
}

export default InputEmoji;
