import coolsms from "coolsms-node-sdk";
// 1. 핸드폰번호 자리수 맞는지 확인
export function checkValidationPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!!!!!!!핸드폰 번호를 제대로 입력해주세요!!");
    return;
  } else {
    return true;
  }
}

// 2. 핸드폰 토큰 6자리 만들기
export function getToken(count) {
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
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  return result;
}

// 3. 핸드폰 번호에 토큰 전송하기
export async function sendTokenToSMS(myPhone, token) {
  // APIKey: NCSZZ8GDRYXOYGJP
  // APISecret: A8WDOJF7DXJIZFZRDEQU6FRGACIEFWTX
  const mysms = coolsms.default;
  // coolsms를 이용한 인증번호 전송 API 만들기
  // apiKey, apiSecret 설정
  const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SECRET);

  // 한 명에게 메시지를 보내고, 그 결과를 await을 사용하여 result에 저장한다.
  const result = await messageService.sendOne({
    to: process.env.SMS_TO,
    from: myPhone,
    text: `안녕하세요 가스렌지홍이에욤.. 공부중이랍니다. 인증번호: ${token}`,
  });
  console.log(result);
  // 여러명에게 보낼 때 api
  // messageService.sendMany([
  //   {
  //     to: '01000000001',
  //     from: myPhone,
  //     text: '한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 발송됩니다.'
  //   },
  //   {
  //     to: '01000000002',
  //     from: myPhone,
  //     text: '한글 45자, 영자 90자 이상 입력되면 자동으로 LMS타입의 문자메시지가 발송됩니다. 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   }
  //   // 1만건까지 추가 가능
  // ]).then(res => console.log(res))
  //   .catch(err => console.error(err));
  console.log(myPhone + " 번호로 인증번호 " + token + "를 전송합니다.");
}
