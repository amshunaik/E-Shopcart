import Newcast from '../UI/Newcast';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const data=useSelector(state=>state.shopcart.shoplist)
  return (
    <Newcast className={classes.cart}>
      <h2>Shopping Cart</h2>
      <ul>
        {data.map((t)=>(
        <CartItem
        key={t.id}
          item={{id:t.id, title: t.title, quantity: t.quantity, total: t.totPrice, price:t.price }}
        />))}
      </ul>
    </Newcast>
  );
};

export default Cart;
