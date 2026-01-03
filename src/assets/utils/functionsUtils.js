
export function getFirstName(fullName) {
   let name = [];
   name = fullName.split(' ');

   return name[0];
}

export function getLastName(fullName) {
   let name = [];
   name = fullName.split(' ');

   if (name.length <= 2) {
      return name[name.length - 1];

   } else {
      name = name[1];
      name = name.replace(',', '');
      return name;
   }
}

export function validateUserInfo(userName, fullName, email, password ) {

   let username_trimmed = userName.trim();
   let fullname_trimmed = fullName.trim();
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();

   const username_pattern = /^[a-z][a-z0-9]{4,16}$/;
   const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


   if (username_trimmed.length === 0) {
      return {isValid: false, error: 'Username is required!'};
   }

   if (!username_trimmed.match(username_pattern)) {
      return {isValid: false, error: 'Username must start with a lowercase letter, only contain lowercase letters and numbers, and be between 4 and 16 characters long!'};
   }

   if (fullname_trimmed.length === 0) {
      return {isValid: false, error: 'First and last name are required!'};
   }
   if (!fullname_trimmed.match(fullname_pattern)) {
      return {isValid: false, error: 'Enter a valid first and last name!'};
   }

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};
   }
   if (!email_trimmed.match(email_pattern)) {
      return {isValid: false, error: 'Enter a valid email!'};
   }

   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be at least 8 characters long!'};

   } else {
      return {isValid: true};
   }

}

export function validateEmailAndPassword(email, password) {
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();

   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};
   }
   if (!email_trimmed.match(email_pattern)) {
      return {isValid: false, error: 'Enter a valid email!'};
   }

   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be at least 8 characters long!'};

   } else {
      return {isValid: true};
   }

}