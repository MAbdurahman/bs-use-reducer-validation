
export const ACTIONS = {
   EMAIL_CHANGE: "EMAIL_CHANGE",
   PASSWORD_CHANGE: "PASSWORD_CHANGE",
}

export const initialState = {
   email: {
      value: '',
      isValid: false
   },
   password: {
      value: '',
      validations: {
         hasLowercase: false,
         hasUppercase: false,
         hasDigit: false,
         hasSpecialCharacter: false,
         hasPasswordPattern: false
      }
   }
}

const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;
const lowercase_pattern = /^(?=.*[a-z])/g;
const uppercase_pattern = /^(?=.*[A-Z])/g;
const digit_pattern = /^(?=.*\d{1,})/g;
const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


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
         const hasLowercase = password_trimmed.match(lowercase_pattern);
         const hasUppercase = password_trimmed.match(uppercase_pattern);
         const hasDigit = password_trimmed.match(digit_pattern);
         const hasSpecialCharacter = password_trimmed.match(special_pattern);
         const hasPasswordPattern = password_trimmed.match(password_pattern);

         return {
            ...state,
            hasLowercase,
            hasUppercase,
            hasDigit,
            hasSpecialCharacter,
            hasPasswordPattern
         };

      default:
         return state;
   }
}