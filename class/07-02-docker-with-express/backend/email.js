import * as dotenv from "dotenv";
import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
export function checkValidationEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("정확한 이메일 주소를 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const createdAt = new Date();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();
  const result = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `;
  return result;
}

export async function sendWelcomeTemplateToEmail({ email, template }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_ID,
      pass: "",
    },
  });
  const result = await transporter.sendMail({
    from: process.env.USER_ID,
    to: email,
    subject: "김홍식입니다.",
    html: template,
  });
  console.log(result);
  //console.log(`${email}로 메일을 보냅니다. ${template}`);
}
