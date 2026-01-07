import React, {Fragment, useReducer} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from '../Auth/SignUp/index.jsx';
import SignIn from '../Auth/SignIn/index.jsx';
import {Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

   return (
      <Fragment>
         <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
         </Routes>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
         />
      </Fragment>

   );
}