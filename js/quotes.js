const quotes = [
  {
    qoute:
      "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
    autor: "박명수",
  },
  {
    qoute: "늦었다고 생각할 때가 늦었다.",
    autor: "박명수",
  },
  {
    qoute: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라.",
    autor: "박명수",
  },
  {
    qoute: "어려운 길은 길이 아니다.",
    autor: "박명수",
  },
  {
    qoute: "즐길 수 없으면 피하라.",
    autor: "박명수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");
// floor() : 소수점 이하를 버림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qoute;
autor.innerText = todaysQuote.autor;
