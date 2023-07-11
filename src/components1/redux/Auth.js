import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authaction } from './store/Index';
const Auth = () => {
  const dis=useDispatch();
  const loginhand=(event)=>{
    event.preventDefault();
    dis(authaction.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginhand}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
