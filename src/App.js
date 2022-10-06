import { useSelector, useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from './actions';

function App(props) {

  const styles = {
    increment: {
      color: 'green',
      margin: '10px'
    },
    decrement: {
      color: 'red',
      margin: '10px'
    }
  }
  /* const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch(); */

  return (
    <div>
      <h1>Counter {props.counter}</h1>
      {/* <button style={styles.increment} onClick={() => dispatch(increment())}>+</button>
      <button style={styles.decrement} onClick={() => dispatch(decrement())}>-</button> */}
      <button style={styles.increment} onClick={() => props.increment()}>+</button>
      <button style={styles.decrement} onClick={() => props.decrement()}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment,
    decrement,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
