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
      <p>{spinnerStatus.msg}</p>
  } 

  render() {
    const { spinnerStatus } = this.props;
    return spinnerStatus.open ? this.renderSpinner() : null;
  }
}

const mapStateToProps = (state) => {
  return {
    spinnerStatus: state.spinnerReducer,
  }
}

export default connect(mapStateToProps)(Spinner);
