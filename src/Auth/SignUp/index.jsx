import {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateUserInfo} from '../../assets/utils/functionsUtils';
import PasswordStrengthMeter from '../../Components/PasswordStrengthMeter/index.jsx';
import {toast} from 'react-toastify';
import styles from './SignUp.module.css';
import {ACTIONS, initialState, signUpReducer} from './signUpReducer.js';

export default function SignUp() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
      username: '',
      fullname: '',
      email: '',
      password: ''
   });
   const [state, dispatch] = useReducer(signUpReducer, initialState);
   console.log(state);

   const togglePasswordIsShowing = () => {
      setIsShowing(!isShowing);
   };

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const {
         isValid,
         error
      } = validateUserInfo(formData.username, formData.fullname, formData.email, formData.password);
      try {
         if (!isValid) {
            toast.error(error);
            return;
         }

         toast.success('User successfully signed up!');

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
                     <div className={styles.sign__up__form__group}>
                        <label className={styles.hide__label} htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' placeholder='Enter username' onChange={handleChange}/>
                     </div>
                     <div className={styles.sign__up__form__group}>
                        <label className={styles.hide__label} htmlFor='fullname'>Full name</label>
                        <input type='text' id='fullname' name='fullname' placeholder='Enter first and last name' onChange={handleChange}/>
                     </div>
                     <div className={styles.sign__up__form__group}>
                        <label className={styles.hide__label} htmlFor='email' id='email'>Email</label>
                        <input type='text' id='email' name='email' placeholder='email@example.com' onChange={handleChange}/>
                     </div>
                     <div className={styles.sign__up__form__group}>
                        <label className={styles.hide__label} htmlFor='password' id='password'>Password</label>
                        <div className={styles.sign__up__form__passwordGroup}>
                           <input type={isShowing ? 'text' : 'password'} id='password'
                                  name='password' placeholder='Enter password'
                                  onChange={handleChange}/>
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
                     <PasswordStrengthMeter password={formData.password}/>
                     <button type='submit' className={styles.sign__up__form__button}>Sign Up</button>
                     <p className={styles.sign__up__form__text}>Already have an account? <span className={styles.sign__up__form__text__link}><Link to='/sign-in'>Sign In</Link></span></p>
                  </form>
               </section>

            </Col>
         </Row>
      </Container>
   );
}