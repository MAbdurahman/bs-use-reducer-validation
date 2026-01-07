
export const ACTIONS = {
   USERNAME_CHANGE: "USERNAME_CHANGE",
   FULLNAME_CHANGE: "FULLNAME_CHANGE",
   EMAIL_CHANGE: "EMAIL_CHANGE",
   PASSWORD_CHANGE: "PASSWORD_CHANGE",
}

export const initialState = {
   username: {
      value: '',
      validations: {
         hasStartPattern: false,
         hasAllowablePattern: false,
         hasDigitPattern: false,
         hasUsernamePattern: false
      }
   },
   fullname: {
      value: '',
      isValid: false,
   },
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

const username_pattern = /^(?=[a-z])(?=.*\d)[a-z0-9]{4,16}$/;
const username_start_pattern = /^(?=.*[a-z])/g;
const username_allowable_pattern = /^[a-z0-9]*$/;
const username_digit_pattern = /^(?=.*\d{1,})/g;

const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;
const lowercase_pattern = /^(?=.*[a-z])/g;
const uppercase_pattern = /^(?=.*[A-Z])/g;
const digit_pattern = /^(?=.*\d{1,})/g;
const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


export const signUpReducer = (state = initialState, action) => {
   const {type, payload} = action;

   switch (type) {
    case ACTIONS.USERNAME_CHANGE:
       const username_trimmed = payload.trim();
       const hasStartPattern = username_trimmed.match(username_start_pattern);
       const hasAllowablePattern = username_trimmed.match(username_allowable_pattern);
       const hasDigitPattern = username_trimmed.match(username_digit_pattern);
       const hasUsernamePattern = username_trimmed.match(username_pattern);

       return {
          ...state,
          hasStartPattern,
          hasAllowablePattern,
          hasDigitPattern,
          hasUsernamePattern
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