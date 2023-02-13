import { checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail } from './email.js';

function createUser({ name, age, school, email }) {
	// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const template = getWelcomeTemplate({ name, age, school, email });
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail({ email, template });
  }
}

// const myUser = {
//   name: '철수',
//   age: 13,
//   school: '다람쥐초등학교',
//   email: 'a@a.com',
// };
const name = '철수';
const age = 13;
const school = '다람쥐초등학교';
const email = 'a@a.com';

createUser({ name, age, school, email});