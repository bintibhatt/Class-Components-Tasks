//emoji list using context

import { Component, createContext } from "react";
import InputEmoji from "./inputEmoji";

export const EmojiContext = createContext();

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
    return (
      <EmojiContext.Provider value={{ getEmojiTitle: this.getEmojiTitle }}>
        <InputEmoji getEmojiTitle={this.getEmojiTitle} />
        <h3>Filtered Emojis</h3>
        <ul>
          {this.searchTheEmoji().map((emoji) => {
            return (
              <li key={emoji.title}>
                {emoji.symbol} {emoji.title}
              </li>
            );
          })}
        </ul>
      </EmojiContext.Provider>
    );
  }
}

export default EmojiList;
