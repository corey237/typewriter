const sentence = "hello there from lighthouse labs\n";
let delay = 100;
let complete = false;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += 50;
  
}
