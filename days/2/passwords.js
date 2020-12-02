input = document.body.innerText.split("\n").filter((item) => item != "");

function parseInput(input) {
	x = [];
	input.forEach(entry => { x.push(entry.split(/-|:| /).filter((item) => item != ""))}); // RegEx: Splits for '-', ':' or ' ' characters
	return x;
}

function checkValidity1(entry) {
  var repl = new RegExp('[^'+entry[2]+']', "g") 
  var testStr = entry[3].replaceAll(repl,'') // Remove all characters other than the one we're looking for
  return !((testStr.length < entry[0]) || (testStr.length > entry[1]))
}

function checkValidity2(entry) {
  var indexOne = entry[0] - 1;
  var indexTwo = entry[1] - 1;

  return ((entry[3][indexOne] == entry[2]) ^ (entry[3][indexTwo] == entry[2]))
}

p = parseInput(input);

total1 = 0;
for (i = 0; i < p.length; i++) {
  if (checkValidity1(p[i])) {
    total1++
  };
}

total2 = 0;
for (i = 0; i < p.length; i++) {
  if (checkValidity2(p[i])) {
    total2++
  };
}

console.log("Valid passwords (Part 1): " + total1)
console.log("Valid passwords (Part 2): " + total2)
