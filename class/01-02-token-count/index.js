console.log("안녕하세욤");

function getToken(aaaa) {
  if (aaaa === undefined) {
    console.log("에러발생!!!!!!!갯수를 제대로 입력해주세요!!");
    return;
  } else if (aaaa <= 0) {
    console.log("에러발생!!!!!!!갯수가 너무 적습니다!!");
    return;
  } else if (aaaa > 10) {
    console.log("에러발생!!!!!!!갯수가 너무 많습니다!!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(aaaa, "0");
  console.log(result);
}
