import React, { Component, createRef } from "react";
import axios from "axios";
import Post from "../components/post";
import Input from "../components/input";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.scrollToRef = createRef();

    this.state = {
      posts: [],
      errorMsg: "",
      scrollId: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  handleInputChange = (event) => {
    this.setState({ targetId: event.target.value });
  };

  scrollToPost = () => {
    this.scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    console.log({ scroll: this.scrollToRef.current });
  };

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <div>
          <Input onClick={this.scrollToPost} />
          {posts.length ? (
            posts.map((post) => (
              <Post
                innerRef={this.scrollToRef}
                key={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
            ))
          ) : (
            <h1>{errorMsg}</h1>
          )}
        </div>
      </div>
    );
  }
}

export default PostList;
