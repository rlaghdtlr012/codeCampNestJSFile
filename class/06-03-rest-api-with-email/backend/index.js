import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";
import { checkValidationPhone, sendTokenToSMS, getToken } from "./phone.js";
import { options } from "./swagger/config.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors()); // 모든 사이트에 대해서 허용
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/boards", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용이에요@@",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희 제목입니다.",
      contents: "영희 내용이에요@@",
    },
    {
      number: 3,
      writer: "훈이",
      title: "훈이 제목입니다.",
      contents: "철수 내용이에요@@",
    },
  ];
  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  console.log(req.body);
  // 2. 저장 결과 응답 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/token/phone", (req, res) => {
  const isValid = checkValidationPhone(req.body.phoneNumber);
  if (isValid) {
    const myToken = getToken(6);
    sendTokenToSMS(req.body.phoneNumber, myToken);
    res.send("작성 완료.");
  } else {
    res.send("핸드폰 번호 제대로 입력해라");
  }
  console.log(isValid);
});

app.post("/users", (req, res) => {
  const user = req.body.myUser;
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const template = getWelcomeTemplate(user);
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeTemplateToEmail(user.email, user.template);
    res.send("가입 완료!!!!");
  }
});

// api 서버를 실행해줘. 24시간동안 켜져있는 대기 상태로 돌입한다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
