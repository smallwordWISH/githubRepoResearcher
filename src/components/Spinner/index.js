import React, { Component } from 'react';
import { connect } from 'react-redux';

class Spinner extends Component {
  renderSpinner = () => {
    const { spinnerStatus } = this.props;

    return spinnerStatus.msg === '' ?
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div> :
      <div className="spinner">
        <p>{spinnerStatus.msg}</p>
      </div>;
  }

  render() {
    const { spinnerStatus } = this.props;
    return spinnerStatus.open ? this.renderSpinner() : null;
  }
}

const mapStateToProps = state => ({ spinnerStatus: state.spinnerReducer });

export default connect(mapStateToProps)(Spinner);
