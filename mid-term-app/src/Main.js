import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [
        {
          id: 1,
          username: "User123",
          text: "What a beautiful game",
          timestamp: "2 minutes ago",
          replies: [],
          imageUrl:
            "https://3dnews.ru/assets/external/illustrations/2023/09/26/1093568/2.jpg", // Add image URL here
        },
        {
          id: 2,
          username: "User456",
          text: "This Sekiro is legit.",
          timestamp: "5 minutes ago",
          replies: [],
          imageUrl:
            "https://i.guim.co.uk/img/media/6cc5ffbb76d7ba7dbd711c5ae4f0543d4c9d26b2/60_0_1800_1080/master/1800.jpg?width=700&quality=85&auto=format&fit=max&s=fdf3f533a02b472f8af8206f56cf2aef", // Add image URL here
        },
      ],
      newTweetText: "",
      newTweetImage: "", // Added to handle the image URL for new tweets
      replyText: "",
      activeTweetId: null,
    };
  }
  handleReplyInputChange = (e) => {
    this.setState({ replyText: e.target.value });
  };

  handleReplySubmit = (e) => {
    e.preventDefault();

    if (this.state.replyText.trim() === "") {
      return;
    }

    const newReply = {
      id: Date.now(),
      username: "CurrentUser",
      text: this.state.replyText,
      timestamp: "just now",
    };

    this.setState((prevState) => {
      const updatedTweets = prevState.tweets.map((tweet) => {
        if (tweet.id === this.state.activeTweetId) {
          return {
            ...tweet,
            replies: [...tweet.replies, newReply],
          };
        }
        return tweet;
      });

      return {
        tweets: updatedTweets,
        replyText: "",
        activeTweetId: null,
      };
    });
  };

  handleTweetSubmit = (e) => {
    e.preventDefault();

    if (this.state.newTweetText.trim() === "") {
      return;
    }

    const newTweet = {
      id: Date.now(),
      username: "User",
      text: this.state.newTweetText,
      timestamp: "just now",
      replies: [],
      imageUrl: this.state.newTweetImage, // Add the image URL for the new tweet
    };

    this.setState((prevState) => ({
      tweets: [newTweet, ...prevState.tweets],
      newTweetText: "",
      newTweetImage: "", // Reset the image URL field
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTweetText: e.target.value });
  };

  handleImageInputChange = (e) => {
    this.setState({ newTweetImage: e.target.value });
  };

  setActiveTweet = (tweetId) => {
    this.setState({ activeTweetId: tweetId });
  };

  // Rest of your component code

  render() {
    return (
      <div className="Main">
        <h1>My Twitter</h1>
        <div>
          <form onSubmit={this.handleTweetSubmit}>
            <textarea
              placeholder="What's happening?"
              rows="4"
              cols="50"
              value={this.state.newTweetText}
              onChange={this.handleInputChange}
            ></textarea>
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={this.state.newTweetImage}
              onChange={this.handleImageInputChange}
            />
            <br />
            <input type="submit" value="Tweet" />
          </form>
        </div>
        <div className="tweets">
          {this.state.tweets.map((tweet) => (
            <div key={tweet.id} className="tweet">
              <span className="username">{tweet.username}:</span> {tweet.text}
              {tweet.imageUrl && <img src={tweet.imageUrl} alt="Tweet" />}
              <span className="timestamp">{tweet.timestamp}</span>
              <button onClick={() => this.setActiveTweet(tweet.id)}>Reply</button>
              {tweet.replies.map((reply) => (
                <div key={reply.id} className="reply">
                  <span className="username">{reply.username}:</span> {reply.text}
                  <span className="timestamp">{reply.timestamp}</span>
                </div>
              ))}
              {tweet.id === this.state.activeTweetId && (
                <form onSubmit={this.handleReplySubmit}>
                  <textarea
                    placeholder="Reply to this tweet"
                    rows="2"
                    cols="40"
                    value={this.state.replyText}
                    onChange={this.handleReplyInputChange}
                  ></textarea>
                  <br />
                  <input type="submit" value="Reply" />
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
