import axios from "axios";

// 비동기 방식(결과를 기다리지 않는 방식. 그래서 pending의 결과가 나온다.)
function fetchPost() {
  const data = axios.get('https://koreanjson.com/posts/1');
  console.log(data); // Promise{ <pending> } 아직 값이 안나왔음. 나오면 알려줄게. 기다린다는 약속만 남아있음.
}

// 동기 방식(비동기 함수인 axios를 async/await을 통해 동기 형태로 바꿔준 것)
async function fetchPost2() {
  const data = await axios.get('https://koreanjson.com/posts/1');
  console.log(data.data); // 실제 데이터 값을 기다린 후, 순서에 맞게 data에 담아준다. 결과가 주르륵 나옴
}

fetchPost(); // Primise{ <pending> }
fetchPost2(); // 실제 데이터