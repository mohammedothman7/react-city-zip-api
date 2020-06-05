import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Styles.css";

class Info extends Component {
  render() {
    let display;
    if (this.props.zipCode) {
      display = this.props.zipCode.map((e, i) => {
        return (
          <>
            <h3 style={styles}>
              <li key={uuidv4()}>City: {e.city}</li>
              <li key={uuidv4()}>State: {e.state}</li>
              <li key={uuidv4()}>Country: {e.country}</li>
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

const styles = {
  textAlign: "center",
  color: "white",
  border: "3px double rgb(12, 184, 232)",
  borderWidth: "50%",
  borderRadius: "15px",
  borderSpacing: "15px",
  padding: "15px",
  margin: "auto",
  marginBottom: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "65%",
};

export default Info;
