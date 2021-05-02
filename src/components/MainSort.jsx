import React, { Component } from "react";
import { connect } from "react-redux";
import { initArray } from "../store/bubbleSort";
import "../components/MainSort.css";

class MainSort extends Component {
  state = {};
  componentDidMount() {
    console.log("mount");

    this.props.settingArray();
  }

  render() {
    const { randomArray, algo } = this.props;

    return (
      <div className="bodycontainer">
        <label className="label">{algo}</label>
        <ul className="container">
          {randomArray.map((num, index) => (
            <li key={index}>
              <div className="bar" style={{ height: `${num}px` }}></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  randomArray: state.list,
  algo: state.algo,
});

const mapDispatchToProps = (dispatch) => ({
  settingArray: () => dispatch(initArray()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSort);
