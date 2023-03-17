import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Increase_Counter } from "../redux/actions/counterActions";
import { connect } from 'react-redux';

class IncreaseCounter extends Component {
  render() {
    return <div>
        <button onClick={() => this.props.dispatch(Increase_Counter())}>Increase Counter</button>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IncreaseCounter, dispatch),
  };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
