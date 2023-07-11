
import { useState } from 'react';
import Add from './Add';
import classes from './todo.module.css'
import { useDispatch } from 'react-redux';
import { todoactions } from '../../store/Todo';

function Todo(){
    const [hand,sethand]=useState('');
    const [press,setpress]=useState(false);
    const [count,setcount]=useState(0);
    const [val,setval]=useState([]);
    const [remov,setremov]=useState(0);
    const [added,setadded]=useState(false);
    
    //const added=useSelector(state=>state.todo.isadd);
    //const visited=useSelector(state=>state.todo.vis);
    //const listcount=useSelector(state=>state.todo.Qlength);
    //const removed=useSelector(state=>state.todo.done);
  
    const dis1=useDispatch();
    const dis2=useDispatch();

    const valchange=(event)=>{
      sethand(event.target.value);
      
    setpress(false)
    }
  
    const addhand=()=>{
    
      
      if(hand!==''){
        setadded(true);
        setpress(true);
        setval((prev)=>{return[...prev,hand]})
        
        console.log("val",val)
        setpress(false);
        sethand('');
        
        setcount(count+1);
        dis1(todoactions.isattach({value:count+1,list:hand}));

      }
      setpress(true)
      setadded(false);
      

    }
    
    const deleteitem=(id)=>{
      console.log("deleted");
      setval((prev)=>{
        return prev.filter((elem,keyid) => {
          return keyid!==id;
        }
      )})
      setremov(remov+1);
      dis2(todoactions.isdeleted(remov+1));

    }
    //console.log(val);
    return(
        <div className={classes.bod}>
            <div>
            <h1>Add Products you want to buy</h1>
            </div>
            <div  className={classes.cover}>
                <div className={classes.done}>
                <input className={classes.input} type="text" placeholder="Add Items.." value={hand} onChange={valchange}/>
                <button className={classes.but} onClick={addhand}>+ Add</button>
            </div>
            <div className={classes.memory}>
                <h4 className={classes.h4}>TotalCount: {count}</h4>
                <h4 className={classes.h4}>No of products bought: {remov}</h4>
            </div>
            
           
              <div className={classes.layout}>
              <ul className={classes.ul}>
              {val.map((u,ind)=>( 
                <Add id={ind} key={ind} Tend={u} onSelect={deleteitem} clicked={added}/> 
              )
              )}
              </ul>
              </div>
            </div>
     

    </div>
    )
}
export default Todo;

/* <div className={classes.memory}>
                <h4 className={classes.h4}>TotalCount: {listcount}</h4>
                <h4 className={classes.h4}>No of products bought: {removed}</h4>
</div> */