//emoji list using context

import { Component, createContext } from "react";
import InputEmoji from "./inputEmoji";

export const EmojiContext = createContext();

class EmojiContextP extends Component {
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
        <InputEmoji />
      </EmojiContext.Provider>
    );
  }
}

export default EmojiContextP;
