
export const ACTIONS = {
   EMAIL_CHANGE: "EMAIL_CHANGE",
   PASSWORD_CHANGE: "PASSWORD_CHANGE",
   RESET_FORM: "RESET_FORM"
}

export const initialState = {
   email: {
      value: '',
      isValid: false
   },
   password: {
      value: '',
      isValid: false
   }
}

const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;

export const signInReducer = (state = initialState, action) => {
   const {type, payload} = action;

   switch (type) {
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

      case ACTIONS.RESET_FORM:
         return initialState;

      default:
         return state;
   }
}