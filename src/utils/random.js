function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getrandomArrayOfLength = (length, max) => {
  let a = [];
  for (let i = 1; i <= length; i++) {
    a.push(getRandomInt(max));
  }
  return a;
};

export default getrandomArrayOfLength;
