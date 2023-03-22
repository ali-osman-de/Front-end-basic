import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { IncreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import "./all.css"

class Increase extends Component {
  render() {
    return (
      <div className="butonInc">
          <button className="ui inverted big button red"
            onClick={() => {
              this.props.dispatch(IncreaseCounter());
            }}
          >
            1 Arttır
          </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(IncreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(Increase);
