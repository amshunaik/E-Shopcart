import classes from './Header.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { authaction } from './store/Index';

const Header = () => {

  const dis=useDispatch();
  const f=useSelector(state=>state.a1.isauth);
  const loghand=()=>{
    dis(authaction.logout())
  }
  //const f=useSelector(state=>state.a1.isauth);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {f&&(<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={loghand}>Logout</button>
          </li>
        </ul>
        
      </nav>)}
    </header>
  );
};

export default Header;
