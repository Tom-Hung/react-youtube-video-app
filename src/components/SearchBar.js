import React from "react";

class SearchBar extends React.Component {
  state = { content: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { onSearchSubmit } = this.props;
    onSearchSubmit(this.state.content);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search: </label>
            <input type="text" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })}></input>
            <div className="content">typing: {this.state.content}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
