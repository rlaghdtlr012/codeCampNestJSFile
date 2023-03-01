import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js'
const app = express();
const port = 3000



app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "제목입니다.", contents: "내용이에요@@"},
    { number: 2, writer: "영희", title: "영희 제목입니다.", contents: "영희 내용이에요@@"},
    { number: 3, writer: "훈이", title: "훈이 제목입니다.", contents: "철수 내용이에요@@"}
  ]
  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post('/boards', (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  console.log(req.body);
  // 2. 저장 결과 응답 주기
  res.send('게시물 등록에 성공하였습니다.');
})

// api 서버를 실행해줘. 24시간동안 켜져있는 대기 상태로 돌입한다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});