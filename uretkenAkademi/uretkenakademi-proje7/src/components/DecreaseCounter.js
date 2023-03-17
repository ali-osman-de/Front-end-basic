import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Decrease_Counter } from "../redux/actions/counterActions";
import { connect } from 'react-redux';

class DecreaseCounter extends Component {
  render() {
    return <div>
        <button onClick={() => this.props.dispatch(Decrease_Counter())}>Decrease Counter</button>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Decrease_Counter, dispatch),
  };
}

export default connect(mapDispatchToProps)(DecreaseCounter);