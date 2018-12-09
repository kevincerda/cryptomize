import React, { Component } from 'react';

export default class LiveResults extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="new-section container-fluid" id="live-results">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Powered by{' '}
              <a href="https://www.coindesk.com/price/" target="_blank">
                CoinDesk
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
