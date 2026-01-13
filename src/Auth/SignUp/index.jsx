import {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateUserInfo, getFirstName} from '../../assets/utils/functionsUtils';
import PasswordStrengthMeter from '../../Components/PasswordStrengthMeter/index.jsx';
import {toast} from 'react-toastify';
import styles from './SignUp.module.css';
import {ACTIONS, initialState, signUpReducer} from './signUpReducer.js';
import {useNavigate} from 'react-router-dom';

export default function SignUp() {
   const [isShowing, setIsShowing] = useState(false);
   const [state, dispatch] = useReducer(signUpReducer, initialState);
   const navigate = useNavigate();

   const togglePasswordIsShowing = () => {
      setIsShowing(!isShowing);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const {isValid, error} = validateUserInfo(state.username.value, state.fullname.value, state.email.value, state.password.value);
      try {
         if (!isValid) {
            toast.error(error);
            return;
         }
         const firstName = getFirstName(state.fullname.value);
         toast.success(`${firstName} successfully signed up!`);

         setTimeout(()=> {
            dispatch({type: ACTIONS.RESET_FORM});
            navigate('/sign-in');
         }, 3000);


      } catch (err) {
         toast.error(err.message);
      }
   };

   return (
      <Container fluid>
         <Row>
            <Col sm={{offset: 1, span: 10}} md={{offset: 3, span: 6}}
                 lg={{offset: 4, span: 4}}>
               <section className={styles.sign__up}>
                  <h4 className={styles.sign__up__title}>Sign Up</h4>
                  <form action='' className={styles.sign__up__form} onSubmit={handleSubmit}>
                     <div className={styles.sign__up__form__group} tabIndex={0} >
                        <label className={styles.hide__label} htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' placeholder='Enter username' onChange={(e) => dispatch({ type: ACTIONS.USERNAME_CHANGE, payload: e.target.value })}/>
                     </div>
                     <div className={styles.sign__up__form__group} tabIndex={1}>
                        <label className={styles.hide__label} htmlFor='fullname'>Full name</label>
                        <input type='text' id='fullname' name='fullname' placeholder='Enter first and last name' onChange={(e) => dispatch({ type: ACTIONS.FULLNAME_CHANGE, payload: e.target.value })}/>
                     </div>
                     <div className={styles.sign__up__form__group} tabIndex={2}>
                        <label className={styles.hide__label} htmlFor='email' id='email'>Email</label>
                        <input type='text' id='email' name='email' placeholder='email@example.com' onChange={(e) => dispatch({ type: ACTIONS.EMAIL_CHANGE, payload: e.target.value })}/>
                     </div>
                     <div className={styles.sign__up__form__group}>
                        <label className={styles.hide__label} htmlFor='password' id='password'>Password</label>
                        <div className={styles.sign__up__form__passwordGroup} tabIndex={3} >
                           <input type={isShowing ? 'text' : 'password'} id='password'
                                  name='password' placeholder='Enter password'
                                  onChange={e => dispatch({ type: ACTIONS.PASSWORD_CHANGE, payload: e.target.value })}/>
                           {
                              isShowing ? (
                                 <EyeOutlined className={styles.sign__up__form__passwordGroup__icon}
                                              onClick={togglePasswordIsShowing}/>
                              ) : (
                                 <EyeInvisibleOutlined
                                    className={styles.sign__up__form__passwordGroup__icon}
                                    onClick={togglePasswordIsShowing}/>
                              )
                           }
                        </div>
                     </div>
                     <PasswordStrengthMeter password={state.password.value}/>
                     <button type='submit' className={styles.sign__up__form__button}>Sign Up</button>
                     <p className={styles.sign__up__form__text}>Already have an account? <span className={styles.sign__up__form__text__link}><Link to='/sign-in'>Sign In</Link></span></p>
                  </form>
               </section>
            </Col>
         </Row>
      </Container>
   );
}