import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <Line data={data} />
        <p>
          Powered by{' '}
          <a href="https://www.coindesk.com/price/bitcoin">Coindesk</a>
        </p>
      </React.Fragment>
    );
  }
}
