import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Increase_By_Two_Counter } from "../redux/actions/counterActions";
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return <div>
        <button onClick={() => this.props.dispatch(Increase_By_Two_Counter())}>Increase By Two Counter</button>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Increase_By_Two_Counter, dispatch),
  };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);