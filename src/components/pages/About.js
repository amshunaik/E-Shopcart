import classes from './About.module.css'
import { Link } from 'react-router-dom'
function About(){
    return(
        <div className={classes.cov}>
            <div className={classes.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        <div className={classes.about}>
            
            <div className={classes.part1} >
                <h2 className={classes.tit1}> About Us  </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eveniet, repellendus 
                    deleniti explicabo blanditiis porro reprehenderit fugiat numquam optio,
                     soluta necessitatibus, dignissimos iure quos modi? Iure rem similique ullam nihil?
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eveniet, repellendus 
                    deleniti explicabo blanditiis porro reprehenderit fugiat numquam optio,
                     soluta necessitatibus, dignissimos iure quos modi? Iure rem similique ullam nihil?
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eveniet, repellendus 
                    deleniti explicabo blanditiis porro reprehenderit fugiat numquam optio,
                     soluta necessitatibus, dignissimos iure quos modi? Iure rem similique ullam nihil?</p>
            </div>

            <div className={classes.part2}>
                <h2 className={classes.tit2}>abscd-gbnmm</h2>
                <div className={classes.env}>
    
                    <div className={classes.p1}>
                        <h3>Staff</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate quos libero repellendus 
                            fugiat, tempora illum 
                            earum adipisci quod aliquam numquam molestias sit illo expedita ex necessitatibus maxime rerum quae.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate quos libero repellendus 
                            fugiat, tempora illum 
                            earum adipisci quod aliquam numquam molestias sit illo expedita ex necessitatibus maxime rerum quae</p>
                    </div>
                    <div className={classes.p1}>
                        <h3>Working environment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto odio vero earum! Eligendi 
                            impedit porro minus, dignissimos 
                            nam molestiae tempora consectetur, nulla doloribus laudantium debitis officia neque est sit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate quos libero repellendus 
                            fugiat, tempora illum 
                            earum adipisci quod aliquam numquam molestias sit illo expedita ex necessitatibus maxime rerum quae</p>
                    </div>
                    <div className={classes.p1}>
                        <h3>Motive</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus animi officiis 
                            exercitationem tempore vitae totam dolore id, dicta re
                            pellendus ducimus eveniet eaque velit dignissimos cumque consequuntur. Quidem, officia consequuntur!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate quos libero repellendus 
                            fugiat, tempora illum 
                            earum adipisci quod aliquam numquam molestias sit illo expedita ex necessitatibus maxime rerum quae</p>
                    </div>
    
                </div>
            </div>

            <div className={classes.part3} >
                <h4>Project Details :</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ipsa optio eos te
                    mporibus fugit quidem sed libero vero accusantium, ipsum velit sequi laudantium earum voluptatum ex
                    pedita sapiente amet sunt! Quisquam.</p>
            </div>
            <div className={classes.part4}> 
                <h4>Team Members :</h4>
                <ul>
                    <li>Amshu </li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                </ul>
                
            </div>

            
        </div>
        </div>
    )

}
export default About