import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IncreaseCounterByTwo } from "../redux/actions/counterActions";
import "./all.css"

class IncreaseByTwo extends Component {
  render() {
    return (
      <div className="butonIncTwo">
        <button
          className="ui inverted big button orange"
          onClick={() => {
            this.props.dispatch(IncreaseCounterByTwo());
          }}
        >
          2 Arttır
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(IncreaseCounterByTwo, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwo);
