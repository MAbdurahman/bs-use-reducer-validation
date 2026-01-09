import {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateEmailAndPassword} from '../../assets/utils/functionsUtils';
import {toast} from 'react-toastify';
import styles from './SignIn.module.css';
import {ACTIONS, initialState, signInReducer} from './signInReducer.js';
import {useNavigate} from 'react-router-dom';


export default function SignIn() {
   const [state, dispatch] = useReducer(signInReducer, initialState);
   const [isShowing, setIsShowing] = useState(false);
   const navigate = useNavigate();

   const togglePasswordIsShowing = () => {
      setIsShowing(!isShowing);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const {isValid, error} = validateEmailAndPassword(state.email.value, state.password.value);

      try {
         if (!isValid) {
            toast.error(error);
            return;
         }

         toast.success('User successfully signed in!');
         setTimeout(()=> {
            dispatch({type: ACTIONS.RESET_FORM});
            navigate('/home');
         }, 3000);

      } catch(err) {
         toast.error(err.message);

      }
   };

   return (
      <Container fluid>
         <Row>
            <Col sm={{offset: 1, span: 10}} md={{offset: 3, span: 6}}
                 lg={{offset: 4, span: 4}}>
               <section className={styles.sign__in}>
                  <h4 className={styles.sign__in__title}>Sign In</h4>
                  <form action='' onSubmit={handleSubmit} className={styles.sign__in__form}>
                     <div className={styles.sign__in__form__group}>
                        <label className={styles.hide__label} htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email'
                               placeholder='email@example.com' onChange={(e) => dispatch({ type: ACTIONS.EMAIL_CHANGE, payload: e.target.value })}/>
                     </div>
                     <div className={styles.sign__in__form__group}>
                        <label className={styles.hide__label} htmlFor='password'>Password</label>
                        <div className={styles.sign__in__form__passwordGroup}>
                           <input type={isShowing ? 'text' : 'password'} id='password'
                                  name='password' placeholder='Enter password'
                                  onChange={e => dispatch({ type: ACTIONS.PASSWORD_CHANGE, payload: e.target.value })}/>
                           {
                              isShowing ? (
                                 <EyeOutlined className={styles.sign__in__form__passwordGroup__icon}
                                              onClick={togglePasswordIsShowing}/>
                              ) : (
                                 <EyeInvisibleOutlined
                                    className={styles.sign__in__form__passwordGroup__icon}
                                    onClick={togglePasswordIsShowing}/>
                              )
                           }
                        </div>
                     </div>
                     <button type='submit' className={styles.sign__in__form__button}>Sign In</button>
                     <p className={styles.sign__in__form__text}>Do not have an account? <span
                        className={styles.sign__in__form__text__link}><Link
                        to='/sign-up'>Sign Up</Link></span></p>
                  </form>
               </section>
            </Col>
         </Row>
      </Container>

   );
}