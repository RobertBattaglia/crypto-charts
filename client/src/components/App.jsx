import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(({ data }) => {
        data = data.bpi;
        this.setState({ data });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <Chart />
      </React.Fragment>
    );
  }
}
