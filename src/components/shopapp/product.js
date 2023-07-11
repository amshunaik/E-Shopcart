import Newcast from '../UI/Newcast';
import classes from './product.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cartsl';
const ProductItem = (props) => {
  const { id,title, price, description } = props;
  const dis=useDispatch();
  const addhand=()=>{
    dis(cartAction.Add({
      id,title,price,
    }))

  }

  return (
    <li className={classes.part}>
      <Newcast>
        <div className={classes.div}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price.toFixed(2)}</div>
        </header>
        <p className={classes.p}>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={addhand} className={classes.but}>Add to Cart</button>
        </div>
      </Newcast>
    </li>
  );
};

export default ProductItem;
