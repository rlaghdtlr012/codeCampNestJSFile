import { checkValidationPhone, getToken, sendTokenToSMS} from "./phone.js";
export function createTokenOfPhone(myPhone, count) {
  const isValid = checkValidationPhone(myPhone);
  if(isValid) {
    const myToken = getToken(6); 
    sendTokenToSMS(myPhone, myToken)
  }
}

createTokenOfPhone("01026373885", 6);