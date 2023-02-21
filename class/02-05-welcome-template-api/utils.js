export function getToday() {
  const createdAt = new Date();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();
  const today = `${year}-${month}-${day}`;
  return today;
}

// rest 파라미터를 이용한 특정 값 제외하기
// const child = {
//   name: '철수',
//   age: 8,
//   school: "다람쥐",
//   money: 2000,
//   hobby: '수영'
// }
// const {school, ...rest} = child;
// console.log(rest);