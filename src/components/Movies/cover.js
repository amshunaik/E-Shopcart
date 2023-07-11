import classes from './cover.module.css';
function Cover(props){
    const url=props.url;
    
    return(
        <li className={classes.li} id={props.id}>
            <img  className={classes.img}src={url} alt="No image found" />
            
            <h1 className={classes.h1}>{props.title}</h1>
            <p className={classes.p}>{props.desc}</p>
            <div className={classes.div}>
            <h4 className={classes.h4}>IMDB Rating: {props.rating}</h4>
            <h4 className={classes.h4}>Released Year: {props.date}</h4>
            </div>
        </li>
    )

}
export default Cover;