import React from 'react';
import { changeColor } from '../actions/actions';

function Button(props) {
  const { color, selected, changeColor } = props;
  const styles = {
    button: {
      height: '100px',
      width: '200px',
      borderRadius: '5px',
      fontSize: '3rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: `1px 1px 3px black, -1px -1px 3px black`,
    },
    activeButton: {
      backgroundColor: color,
      color: 'black',
      boxShadow: `1px 1px 3px ${color}, -1px -1px 3px snow`,
      border: `1px solid black`,
    },
    inactiveButton: {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid white',
    },
  };
  return (
    <div
      style={
        selected
          ? { ...styles.button, ...styles.activeButton }
          : { ...styles.button, ...styles.inactiveButton }
      }
      onClick={() => changeColor(color)}
    >
      {color}
    </div>
  );
}

export default Button;
