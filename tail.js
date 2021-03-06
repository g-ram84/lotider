const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const tail = function (arr) {
	return arr.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
