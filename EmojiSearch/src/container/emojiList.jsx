import React, { Component } from "react";
import InputEmoji from "./inputEmoji";

class EmojiList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      emojiTitle: "",
    };
  }

  componentDidMount() {
    fetch("../../emojiList.json")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          emojis: json,
        });
      });
  }
  getEmojiTitle = (title) => {
    this.setState({
      emojiTitle: title,
    });
  };

  searchTheEmoji = () => {
    return this.state.emojis.filter((emoji) => {
      return emoji.title
        .toLowerCase()
        .includes(this.state.emojiTitle.toLowerCase());
    });
  };

  render() {
    const filteredEmojis = this.searchTheEmoji();
    return (
      <div>
        <h2>Emoji Search</h2>
        <InputEmoji getEmojiTitle={this.getEmojiTitle} />
        <h3>Filtered Emojis</h3>
        <ul>
          {filteredEmojis.map((emoji) => {
            return (
              <li key={emoji.title}>
                {emoji.symbol} {emoji.title}
              </li>
            );
          })}
        </ul>
        <h3>Emoji List</h3>
        <ul>
          {this.state.emojis.map((emoji) => {
            return (
              <li key={emoji.title}>
                {emoji.symbol} {emoji.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EmojiList;
