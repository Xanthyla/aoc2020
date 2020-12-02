input = document.body.innerText.split("\n").filter((item) => item != "");

function parseInput(input) {
	var x = [];
	var splitExp = new RegExp('-|:| ') // RegEx: Splits input file into array
	input.forEach(entry => { x.push(entry.split(splitExp).filter((item) => item != ""))}); 
	return x;
}

function checkPValidity(entry,method) {
    var index1 = entry[0];
    var index2 = entry[1];
    var letter = entry[2];
    var pw = entry[3];
	
    switch(method) {
        case 1:	// Part 1 validator
            var repl = new RegExp('[^' + letter + ']', "g") // RegExp setup
            pw = pw.replaceAll(repl,'') // Remove all characters other than the one we're looking for

            return !((pw.length < index1) || (pw.length > index2))
        case 2: // Part 2 validator
            index1 -= 1; 
	    index2 -= 1; // corporate doesn't know about index zero

            return ((pw[index1] == letter) ^ (pw[index2] == letter))
        default:
            return 0
    }
}

p = parseInput(input);

total1 = 0, total2 = 0;
for (i = 0; i < p.length; i++) {
    if (checkPValidity(p[i],1)) {
        total1++;
    };
    if (checkPValidity(p[i],2)) {
        total2++;
    };
}

console.log("Valid passwords (Part 1): " + total1);
console.log("Valid passwords (Part 2): " + total2);
