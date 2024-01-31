const clock = document.querySelector("h2#clock");

// String() 메서드는 문자열로 변환
// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환 <=> padEnd()
function getClock() {
  // Date 객체는 날짜와 시간을 위한 메서드를 제공
  const date = new Date();
  //  getHours() 메서드는 현재 시간을 나타내는 시간을 반환
  //  getMinutes() 메서드는 현재 시간을 나타내는 분을 반환
  //  getSeconds() 메서드는 현재 시간을 나타내는 초를 반환
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// getClock() 함수를 호출하는 이유: 새로고침 없이 시간을 실시간으로 보여주기 위해
getClock();
// setInterval() 메서드는 지정된 시간마다 함수를 실행
// setInterval(fn, 1000) : 1초마다 fn 함수를 실행
setInterval(getClock, 1000);
