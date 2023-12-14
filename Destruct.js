const scores = [70, 80, 90];

for (let score of scores) {
  score = score + 5;

  console.log(score);
}

for (let [a, b] of scores.entries()) {
  // 0th index = 70
  //1st index = 80
  //2nd index = 90
  console.log(`${a}th index = ${b}`);
}

//array of objects

const ratings = [
  { username: "Peter", score: 43 },
  { username: "Rose", score: 33 },
  { username: "Jack", score: 53 },
  { username: "Alex", score: 47 },
];

let sum = 0;

for (let { score } of ratings) {
  sum += score;
}

console.log(`Total score : ${sum}`);
