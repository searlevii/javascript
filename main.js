var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for (var i=0; i < 6; i++) {
  sum = sum + prices[i];
}

console.log("The sum is: ", sum);

var word = "crows";
var count = 99;
while (count > 1) {
    console.log(count + " " + word + " on the wall. " + count + " " + word + ".");
    console.log("1 fell down and became a wight");
    --count;
    console.log(count + " " + word + " on the wall.");
    console.log("");
    if (count == 2) {
    console.log(count + " " + word + " on the wall. " + count + " " + word + ".");
    console.log("1 fell down and became a wight");
    --count;
    console.log(count + " " + "crow on the wall.");
    console.log("");
    }
    if (count == 1) {
    console.log("1 crow on the wall. 1 single crow. It fell down and became a wight. There's no one left to defend Westeros now.")
    }
}
