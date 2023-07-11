import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { listAction } from '../../store/uisl';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const quan=useSelector(state=>state.shopcart.TotQuan);
  console.log(quan);
  const uihand=()=>{
    dispatch(listAction.toggle());
    
  }
  return (
    <button className={classes.button} onClick={uihand}>
      <span>My Cart</span>
      <span className={classes.badge}>{quan}</span>
    </button>
  );
};

export default CartButton;
