import { hot } from 'react-hot-loader/root';
import React from 'react';
import Buttons from './Buttons.jsx';
import Counter from './Counter.jsx';

function App() {
  return (
    <>
      <div style={styles.container}>
        <Buttons></Buttons>
        <Counter></Counter>
      </div>
      <div style={styles.footer}>OMG LOOK AT HOT RELOADING!!!!!!!</div>
    </>
  );
}

export default hot(App);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    margin: '20px',
    padding: '20px',
  },
  footer: {
    color: 'white',
    textAlign: 'center',
    fontSize: '3rem',
  },
};
