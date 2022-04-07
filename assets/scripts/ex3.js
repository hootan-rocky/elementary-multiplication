//ex-2-try-1

const basicMultiplication = () => {
	const numbersArray = prompt(
		"Write in this format - > '333*444' (without quotes)"
	).split("*");
	const firstNum = numbersArray[0];
	const secondNum = numbersArray[1];
	let outPut = 0;
	let secondTens = 1;

	for (let j = secondNum.length - 1; j >= 0; j--) {
		let firstTens = 1;
		let extra = 0;
		for (let i = firstNum.length - 1; i >= 0; i--) {
			outPut =
				extra * firstTens * secondTens +
				((firstNum[i] * secondNum[j]) % 10) * firstTens * secondTens +
				outPut;
			extra = Math.floor((firstNum[i] * secondNum[j]) / 10);
			if (i === 0) outPut = extra * firstTens * secondTens * 10 + outPut;
			firstTens *= 10;
		}
		secondTens *= 10;
	}
	console.log(outPut);
};
