import { checkValidationPhone, getToken, sendTokenToSMS} from "../06-02-rest-api-with-sms/backend/phone.js";
export function createTokenOfPhone(myPhone, count) {
  const isValid = checkValidationPhone(myPhone);
  if(isValid) {
    const myToken = getToken(6); 
    sendTokenToSMS(myPhone, myToken)
  }
}

createTokenOfPhone("01026373885", 6);