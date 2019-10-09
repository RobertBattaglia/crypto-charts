import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Bitcoin',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,153,0,0.4)',
            borderColor: 'rgba(255,153,0,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,153,0,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,153,0,1)',
            pointHoverBorderColor: 'rgba(255,153,0,0.5)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: []
          }
        ]
      }
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(({ data }) => {
        data = data.bpi;
        const dates = Object.keys(data);
        const vals = Object.values(data);
        this.setState({
          data: {
            labels: dates,
            datasets: [{ ...this.state.data.datasets[0], data: vals }]
          }
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;
    return data.labels.length ? (
      <React.Fragment>
        <Chart data={data} />
      </React.Fragment>
    ) : null;
  }
}
