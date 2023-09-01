const string = (a) => {
  return a.split("").sort(() => {return 0.5 - Math.random()}).join("");
};

console.log(string("the quick brown fox jumps over the lazy dog"));
