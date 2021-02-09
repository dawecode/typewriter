const sentence = "hello there from lighthouse labs";
let multi = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * multi);
  multi++;
}
setTimeout(() => {
  process.stdout.write("\n");
}, multi * 50);

