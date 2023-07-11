import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cartsl';
const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  const d1=useDispatch();
  const Minus=()=>{
    d1(cartAction.Remove(id));
  }
  const Plus=()=>{
    d1(cartAction.Add({id,title,price}))
  }


  return (
    <li className={classes.li}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ₹{total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(₹{price.toFixed(2)} Per item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.but}>
          <button onClick={Minus}>-</button>
          <button onClick={Plus}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
