import React, { Component } from "react";
import { connect } from "react-redux";
import "./all.css";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div class="ui link card">
          <div class="content">
            <div className="ui  statistic huge">
              <div className="value">{this.props.counter}</div>
              <div id="totalnumber" className="label">
                Total Numbers
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
