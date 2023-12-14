import React, { Component } from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="post_div" ref={this.props.innerRef}>
        <div className="post_info">
          <section id="post_interact">
            <p id="userId">{this.props.userId}</p>
            <span>
              <a href="http://localhost:3000/" id="like_post">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </a>
              <a href="http://localhost:3000/" id="share_post">
                <FontAwesomeIcon icon={faShareNodes} size="lg" />
              </a>
              <a href="http://localhost:3000/" id="bookmark_post">
                <FontAwesomeIcon icon={faBookmark} size="lg" />
              </a>
            </span>
          </section>
          <section id="post_content">
            <h3 id="title">{this.props.title}</h3>
            <p id="content">{this.props.body}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default Post;
