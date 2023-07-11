import CartButton from '../shopcart/CartBut';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todoactions } from '../../store/Todo';
const MainHeader = (props) => {
  

 

 
  return (
    <header className={classes.navbar}>
      <h1>Shop-Cart</h1>
      
      <div className={classes.tab}>
        <Link  to="/">Home</Link>
        <Link className={classes.scroll} to="/about">About</Link>
        <Link className={classes.scroll} to="/contact"> Contact</Link>
      </div> 

      
    
        <ul>
          <li>
            <CartButton  />
          </li>
        </ul>
   
    </header>
  );
};

export default MainHeader;

/* <div className={classes.tab}>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div> */