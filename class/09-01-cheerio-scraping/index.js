import axios from "axios";
import * as cheerio from "cheerio";
// 블로그 작성 기능
async function createBoardAPI(mydata) {
  // 1. 입력된 컨텐츠에서 http로 시작하는 글자 있는 지 찾기
  const list = mydata.contents
    .split(" ")
    .filter((el) => el.includes("https"))[0];
  console.log(list);
  // 2. 만약 있다면, 찾은 주소로 axios.get 요청해서 html 코드 받아오기 => 스크래핑
  const result = await axios.get(list);
  console.log(result.data);
  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);
  $("meta").each((idx, data) => {
    if ($(data).attr("property")) {
      const key = $(data).attr("property").split(":")[1];
      const value = $(data).attr("content");
      console.log(key, value);
    }
  });
}

const frontData = {
  title: "안녕하세요~~~",
  contents:
    "여기 정말 좋은 거 같아요! 한 번 놀러오세요!! 여기가 어디냐면 https://naver.com 이에요!!!",
};

createBoardAPI(frontData);
