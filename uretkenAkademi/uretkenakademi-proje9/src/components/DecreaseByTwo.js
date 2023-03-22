import React, { Component } from "react";
import { DecreaseCounterByTwo } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./all.css"

class DecreaseByTwo extends Component {
  render() {
    return (
      <div className="butonDecTwo">
        <button
          className="ui inverted big button green"
          onClick={() => {
            this.props.dispatch(DecreaseCounterByTwo());
          }}
        >
          2 Azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ DecreaseCounterByTwo }, dispatch);
}

export default connect(mapDispatchToProps)(DecreaseByTwo);
