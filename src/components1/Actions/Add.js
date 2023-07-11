import classes from './Add.module.css'
//import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { useSelector } from 'react-redux';
function Add(props){
    const list1=useSelector(state=>state.todo.pres);
    console.log(list1);
    const t1=props.Tend;
    console.log("t1",t1);
    return(
        
        <> 
         <li className={classes.list}>
            
            <button className={classes.remove} onClick={()=>{props.onSelect(props.id)}}>X</button>
            <div className={classes.name} >{t1}</div>
            


            </li>

            
            

       </>


        
        
           
           

        
        
        

    )
    
}
export default Add;


           

// {list1.map((item)=>(
//     <li className={classes.list}>
//          <button className={classes.remove} onClick={()=>{props.onSelect(props.id)}}>X</button>
//          <div className={classes.name} >{item}</div>
//     </li>
// ))}