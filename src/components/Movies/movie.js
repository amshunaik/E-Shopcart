import Cover from "./cover";
import classes from './movie.module.css'
const Movie=(props)=>{
    const r=props.movie;
    //console.log("jjj",r);
    
    return(
        <>
        <ul className={classes.ul}>
            {r.map((p)=>(
                <Cover id={p.id}title={p.title} desc={p.desc} rating={p.rating} url={p.url} date={p.date}/>))}
        </ul>
        </>
    );
}
export default Movie;