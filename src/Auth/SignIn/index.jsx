import {useReducer, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import {validateEmailAndPassword} from '../../assets/utils/functionsUtils';
import PasswordStrengthMeter from '../../Components/PasswordStrengthMeter/index.jsx';
import {toast} from 'react-toastify';
import styles from './SignIn.module.css';


export default function SignIn() {
   const [isShowing, setIsShowing] = useState(false);
   const [formData, setFormData] = useState({
      email: '',
      password: ''
   });

   const togglePasswordIsShowing = () => {
      setIsShowing(!isShowing);
   };

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      const {isValid, error} = validateEmailAndPassword(formData.email, formData.password);

      try {
         if (!isValid) {
            toast.error(error);
            return;
         }
         toast.success('User successfully signed in!');

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
                               placeholder='email@example.com' onChange={handleChange}/>
                     </div>
                     <div className={styles.sign__in__form__group}>
                        <label className={styles.hide__label} htmlFor='password'>Password</label>
                        <div className={styles.sign__in__form__passwordGroup}>
                           <input type={isShowing ? 'text' : 'password'} id='password'
                                  name='password' placeholder='Enter password'
                                  onChange={handleChange}/>
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