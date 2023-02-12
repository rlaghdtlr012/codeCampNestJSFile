// 1. 핸드폰번호 자리수 맞는지 확인
function checkValidationPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!!!!!!!핸드폰 번호를 제대로 입력해주세요!!");
    return;
  } else {
    return true;
  }
}

// 2. 핸드폰 토큰 6자리 만들기
function getToken(count) {
  if (count === undefined) {
    console.log("에러발생!!!!!!!갯수를 제대로 입력해주세요!!");
    return;
  } else if (count <= 0) {
    console.log("에러발생!!!!!!!갯수가 너무 적습니다!!");
    return;
  } else if (count > 10) {
    console.log("에러발생!!!!!!!갯수가 너무 많습니다!!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, "0");
  return result;
}

// 3. 핸드폰 번호에 토큰 전송하기
function sendTokenToSMS(myPhone, result) {
  console.log(myPhone + " 번호로 인증번호 " + result + "를 전송합니다.");
}


function createTokenOfPhone(myPhone, count) {
  const isValid = checkValidationPhone(myPhone);
  if(isValid) {
    const myToken = getToken(6); 
    sendTokenToSMS(myPhone, myToken)
  }
}

createTokenOfPhone("01026373885", 6);