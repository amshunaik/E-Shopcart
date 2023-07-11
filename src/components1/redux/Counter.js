import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cac } from './store/Index';
const Counter = () => {
  const dispath=useDispatch();
  const counter=useSelector(state=>state.c1.counter);
  const d=useSelector(state=>state.c1.show);
  const toggleCounterHandler = () => {
    dispath(cac.toggle());
   
  };
  const add=()=>{
    dispath(cac.incre(5));
  }
  const minus=()=>{
    dispath(cac.dec());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {d&&<div className={classes.value}>{counter}</div>}
      <button onClick={add}>Incre by 5</button>
      <button onClick={minus}>Dec</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
