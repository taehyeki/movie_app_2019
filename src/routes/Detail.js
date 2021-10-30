import React from "react";

class Detail extends React.Component {
  render() {
    const state = this.props.location.state;
    if (!state) {
      this.props.history.push("/");
      return null;
    }
    return <span>{state.title}</span>;
  }
}
export default Detail;
