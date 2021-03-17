import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Button from './Button.jsx';

const mapStateToProps = (state) => ({
  currentColor: state.colors.currentColor,
  colors: state.colors.colors,
});
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => {
    dispatch(actions.changeColor(color));
  },
});

class Buttons extends Component {
  render() {
    const buttons = this.props.colors.map((color, index) => (
      <Button
        color={color}
        selected={color === this.props.currentColor ? true : false}
        changeColor={this.props.changeColor}
        key={color}
      ></Button>
    ));
    return (
      <div style={styles.buttons}>
        <h1>BUTTON</h1>
        <div style={styles.buttonRow}>{buttons}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

const styles = {
  buttons: {
    display: 'flex',
    flex: '1',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
    marginBottom: '20px',
    paddingBottom: '4rem',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80vw',
    marginBottom: '1rem',
  },
  pickedColors: { width: '80vw', height: '2rem', color: 'black' },
};

/**     const chosenColors = this.props.chosenColors.map((color) => (
  <li style={{ display: 'inline' }}> • {color}</li>
  ));

  <div style={styles.pickedColors}>
          Picked colors:
          <ol>{chosenColors}</ol>
        </div>
  */
