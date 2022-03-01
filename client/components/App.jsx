import { hot } from 'react-hot-loader/root';
import React from 'react';
import Buttons from './Buttons.jsx';
import Counter from './Counter.jsx';

function App() {
  return (
    <div style={styles.container} className='App'>
      <Buttons></Buttons>
      <Counter></Counter>
      <div style={styles.footer} className='hotReloading'>
        ZOMG LOOK AT HOT RELOADING!
      </div>
    </div>
  );
}

export default hot(App);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
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
