import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class Info extends Component {
  render() {
    let display;
    if (this.props.zipCode) {
      display = this.props.zipCode.map((e) => {
        return (
          <>
            <h3 key={e.id}>
              City: {e.city} State: {e.state} Country: {e.country}
            </h3>
          </>
        );
      });
    } else {
      display = <></>;
    }
    return (
      <div>
        <div>{display}</div>
      </div>
    );
  }
}

export default Info;
