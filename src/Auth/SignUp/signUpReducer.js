
export const ACTIONS = {
   USERNAME_CHANGE: "USERNAME_CHANGE",
   FULLNAME_CHANGE: "FULLNAME_CHANGE",
   EMAIL_CHANGE: "EMAIL_CHANGE",
   PASSWORD_CHANGE: "PASSWORD_CHANGE",
}

export const initialState = {
   username: {
      value: '',
      isValid: false
   },
   fullname: {
      value: '',
      isValid: false
   },
   email: {
      value: '',
      isValid: false
   },
   password: {
      value: '',
      isValid: false
   }

}

const username_pattern = /^(?=[a-z])(?=.*\d)[a-z0-9]{4,16}$/;
const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;

export const signUpReducer = (state = initialState, action) => {
   const {type, payload} = action;

   switch (type) {
    case ACTIONS.USERNAME_CHANGE:
       const username_trimmed = payload.trim();
       const isUsernameValid = username_trimmed.match(username_pattern);
       return {
          ...state,
          username: {
             value: username_trimmed,
             isValid: isUsernameValid
          }
       }

      case ACTIONS.FULLNAME_CHANGE:
         const fullname_trimmed = payload.trim();
         const isFullnameValid = fullname_trimmed.match(fullname_pattern);
         return {
            ...state,
            fullname: {
               value: fullname_trimmed,
               isValid: isFullnameValid
            }
         };

      case ACTIONS.EMAIL_CHANGE:
         const email_trimmed = payload.trim();
         const isEmailValid =  email_trimmed.match(email_pattern)
         return {
            ...state,
            email: {
               value: email_trimmed,
               isValid: isEmailValid
            }
         };

      case ACTIONS.PASSWORD_CHANGE:
         const password_trimmed = payload.trim();
         const isPasswordValid = password_trimmed.match(password_pattern);
         return {
            ...state,
            password: {
               value: password_trimmed,
               isValid: isPasswordValid
            }
         };

    default:
       return state;

   }
}