import * as yup from 'yup'
import 'core-js/stable';

/**
 * Validate a Canadian Social Insurance Number (SIN)
 * @param  {num || str} sin   A 9-digit Canadian SIN
 * @return {bool}             Validity of the input SIN
 */
function validateSIN (sin) {
    var check, even, tot;
    if (typeof sin === 'undefined'){
        return false
    } else if (typeof sin === 'number') {
      sin = sin.toString();
    } 
    if (sin.length === 9) {
      // convert to an array & pop off the check digit
      sin = sin.split('');
      check = +sin.pop();
  
      even = sin
        // take the digits at the even indices
        .filter(function (_, i) { return i % 2; })
        // multiply them by two
        .map(function (n) { return n * 2; })
        // and split them into individual digits
        .join('').split('');
  
      tot = sin
        // take the digits at the odd indices
        .filter(function (_, i) { return !(i % 2); })
        // concatenate them with the transformed numbers above
        .concat(even)
        // it's currently an array of strings; we want numbers
        .map(function (n) { return +n; })
        // and take the sum
        .reduce(function (acc, cur) { return acc + cur; });
  
      // compare the result against the check digit
      return check === (10 - (tot % 10)) % 10;
    }
    console.log("returning false")
    return false;
  }


export const ClientFormValidationSchema = yup.object().shape({
    clientName: yup.string()
        .max(10)
        .required("Please enter first name."),
    clientLastName: yup.string()
        .required("Please enter last name"),
    clientSIN: yup.number()
        .typeError("Please only enter numbers")
        .max(9)
        .test('valid-sin',"Please enter a valid SIN",(clientSIN) => {
            return validateSIN(clientSIN)
        })
        .required("Please enter your SIN number."),
        
    clientEmail: yup.string().email("Please enter a valid email.")
        .required("Please enter email"),
    clientAddress1: yup.string()
        .max(255,"Address too long, please use address line 2.")
        .required("Please enter address line 1."),
    clientAddress2: yup.string()
        .max(255,"Address too long"),
    clientConsent: yup.boolean()
        .oneOf([true],"You must agree before submitting.")
})