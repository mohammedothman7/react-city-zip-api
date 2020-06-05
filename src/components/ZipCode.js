import React, { Component } from "react";
import Info from "./Info";
import axios from "axios";

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      zipCode: [],
    };
  }

  getZipCode = () => {
    // Calls the API and gets the data from the zip
    const zip = this.state.zip;
    const key = "http://ctp-zip-api.herokuapp.com/zip/";
    const url = key + zip;
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        const zipCode = data.map((d) => {
          return {
            city: d.City,
            state: d.State,
            country: d.Country,
            id: d.RecordNumber,
          };
        });

        this.setState({ zipCode });
      })
      .catch((err) => {
        /*Clear the state if invalid input, 
        this is to clear the screen of previous results if error */
        this.setState({
          zipCode: [],
        });
        alert("Could not find city with that zip code");
      });
  };

  setZip = (e) => {
    // Sets the zip value
    this.setState({ zip: e.target.value });
  };

  render() {
    return (
      <>
        <h3 style={headerStyle}>Zip Code</h3>
        <input
          type="textarea"
          onChange={this.setZip}
          value={this.state.zip}
          placeholder="Enter Zip Code"
          style={searchBarStyle}
        ></input>
        <button type="submit" onClick={this.getZipCode} style={buttonStyle}>
          Submit
        </button>

        <Info zip={this.state.zip} zipCode={this.state.zipCode} />
      </>
    );
  }
}

const headerStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "xx-large",
};

const searchBarStyle = {
  textAlign: "left",
  width: "250px",
  margin: "4px auto",
  display: "inline-block",
};

const buttonStyle = {
  fontWeight: "bold",
  "&:hover": {
    background: "#18191a",
  },
};

export default ZipCode;
