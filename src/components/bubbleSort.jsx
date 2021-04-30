import React, { Component } from "react";
import { connect } from "react-redux";
import {
  bubblesort,
  initArray,
  selectionsort,
  quiksort,
  mergesort,
} from "../store/bubbleSort";
import "../components/sortStyle.css";
import { insertionsort } from "./../store/bubbleSort";

class BubbleSort extends Component {
  state = {};
  componentDidMount() {
    console.log("mount");

    this.props.settingArray();
  }

  render() {
    const { randomArray } = this.props;

    return (
      <React.Fragment>
        <ul className="container">
          {randomArray.map((num, index) => (
            <li key={index}>
              <div className="bar" style={{ height: `${num}px` }}></div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  randomArray: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  settingArray: () => dispatch(initArray()),
  bubblesort: () => dispatch(bubblesort()),
  selectionsort: () => dispatch(selectionsort()),
  insertionsort: () => dispatch(insertionsort()),
  quiksort: () => dispatch(quiksort()),
  mergesort: () => dispatch(mergesort()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BubbleSort);
// export default BubbleSort;
