//your JS code here. If required.
function mapLetters(str) {
	let ans = {};
	for(let i=0; i<str.length; i++) {
		let ch = str[i];

		if(!ans[ch]) {
			ans[ch] = [];
		}

		ans[ch].push(i);
	}

	return ans;
}

const str = prompt("enter the string");
alert(mapLetters(str));

