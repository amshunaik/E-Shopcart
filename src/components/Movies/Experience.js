import { useState } from "react";
import Movie from "./movie";
import classes from './Experience.module.css'
function Experience(){
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcd4176288msh906a4ca12dd1e62p1aee8ajsn20bff9f5e717',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};
const [mov,setmov]=useState([]);
const [load,setload]=useState(false);
const [err,seterr]=useState(null)
async function fetchtak(){
    
    seterr(null);
    setload(true)
    try {
    	const response = await fetch(url, options);
        if(!response.ok){
            throw new Error('Something went wrong')
        }
    	const data = await response.json();
        const result=data.results;
        console.log(result);
        
        const moviedata=(result.map((m)=>{
            return{

               id:m.imdbid,
               url:m.imageurl[0],
               rating:m.imdbrating,
               title:m.title,
               desc:m.synopsis,
               date:m.released
            }


        }))
        setmov(moviedata);
        setload(false);
    	console.log(mov);
    } catch (err) {
    	seterr(err.message)
    }
    }
    
    return(
        <div>
            <div className={classes.button}>
                <h1>Movie Fetch API</h1>
                
            <button className={classes.press}onClick={fetchtak}>Fetch</button>
            

            </div>
            <div>
            {load&&!err&&<p className={classes.p}>Movies loading...... </p>}

            {load&&err&&<p className={classes.p}>{err}</p>}  
            {!load&&mov.length===0&&<p className={classes.nope}>No movie found</p>}  
            {!load&&mov.length>0&&<Movie movie={mov}/>}

            </div>
           
        </div>
    )


}

export default Experience;