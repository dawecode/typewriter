const sentence = "hello there from lighthouse labs";
setTimeout(() => {
  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(char);
  },50)
};