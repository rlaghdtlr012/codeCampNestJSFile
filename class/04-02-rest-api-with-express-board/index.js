//const express = require('express')
import express from 'express';
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api 서버를 실행해줘. 24시간동안 켜져있는 대기 상태로 돌입한다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});