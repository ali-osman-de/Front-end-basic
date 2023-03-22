import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { DecreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import "./all.css"

class Decrease extends Component {
  render() {
    return (
      <div className="butonDec">
        <button
          className="ui inverted big button olive"
          onClick={() => {
            this.props.dispatch(DecreaseCounter());
          }}
        >
          1 Azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(DecreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(Decrease);
