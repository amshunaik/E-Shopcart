import classes from './contact.module.css'
import { Link } from 'react-router-dom'
function Contact(){
    return(

        <div>
            <div className={classes.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            </div>
            <div className={classes.div}>
            <h1>Contact Details :</h1>
            <div>
                <h2>Address: ABC company, B2 road street no 5, Rajendra-Colony, Nagpur</h2>
                <h2>Mobile Phone: 916589xxxxxx</h2>
                <h2>Email address: <a href="mailto:shopcart@gmail.com">ABC company</a></h2>

            </div>
        </div>


        </div>

        
    )

}
export default Contact