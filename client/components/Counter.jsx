import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(actions.incrementCounter()),
  decrementCounter: () => dispatch(actions.decrementCounter()),
});

class Counter extends Component {
  render() {
    return (
      <div style={styles.counter}>
        <h1>COUNTER</h1>
        <h1 style={styles.header}>{this.props.count}</h1>
        <div style={styles.buttons}>
          <button onClick={this.props.decrementCounter} style={styles.button}>
            ➖ DECREMENT
          </button>
          <button onClick={this.props.incrementCounter} style={styles.button}>
            ➕ INCREMENT
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = {
  counter: {
    display: 'flex',
    flex: '1',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
    paddingBottom: '4rem',
  },
  header: {
    fontSize: '6rem',
    background:
      '-webkit-linear-gradient(-45deg, chartreuse 25%, cyan 40%, magenta 60%, orange 75%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  buttons: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
  },
  button: {
    padding: '1rem',
    fontSize: '1.5rem',
    borderRadius: '5px',
    boxShadow: 'none',
  },
};
