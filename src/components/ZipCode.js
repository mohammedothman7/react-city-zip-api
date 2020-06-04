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
        <h3>Zip Code</h3>
        <input
          type="textarea"
          onChange={this.setZip}
          value={this.state.zip}
        ></input>
        <button type="submit" onClick={this.getZipCode}>
          Submit
        </button>

        <Info zip={this.state.zip} zipCode={this.state.zipCode} />
      </>
    );
  }
}

export default ZipCode;
