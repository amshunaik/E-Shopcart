
import Cart from '../components/shopcart/Cart1';
import Head from '../components/Nav/Layout';
import Products from '../components/shopapp/part1';
import Todo from '../components1/Actions/todo'
import classes from './first.module.css'
import Welcome from '../components/Welcome'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todoactions } from '../store/Todo';
import Footer from '../components/Nav/footer';

 
function First() {
  const dis=useDispatch();

  const todohand=()=>{
    dis(todoactions.isvis());
    
  }
  const res=useSelector(state=>state.todo.vis);


  const present=useSelector(state=>state.listpart.cartvis)
  return (
    <div>
      
      <Head>
      <div className={classes.bar}>
      <button  className={classes.but2}onClick={todohand}> Create new list</button> 

      </div>
       
      <Welcome/>
      {res&&<Todo/>}
      
      <hr />

      {present&&<Cart />}


      <Products />
      <Footer/>

    </Head>

      
    </div>
    
  );
}
export default First;
