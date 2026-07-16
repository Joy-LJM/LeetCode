var nums = [1, 5, 16];

for (var num of nums) {
  console.log(num);
}
// use while to rewrite
// initialisation
var iter = nums[Symbol.iterator](),
  next = iter.next(),
  num = next.value;

while (!next.done) {
  // body of for...of
  console.log(num);

  // reset variables
  next = iter.next();
  num = next.value;
}
