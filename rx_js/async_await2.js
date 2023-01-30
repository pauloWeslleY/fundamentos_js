function isGenerateNumbers(min, max, numberProhibited) {
	if (min > max) [max, min] = [min, max];

	return new Promise((resolve, reject) => {
		const calculator = max - min + 1;
		const random = parseInt(Math.random() * calculator) + min;
		if (numberProhibited.includes(random)) {
			reject('Number wrong');
		} else {
			resolve(random);
		}
	});
}

async function isGenerateSenna(qtdNumber, trying = 2) {
   try {
      const numbers = []
      for (let _ of Array(qtdNumber).fill()) {
         numbers.push(await isGenerateNumbers(1, 60, numbers))
      }

      return numbers
   } catch (error) {
      if (trying > 100) {
         throw "Is Not right!"
      } else {
         return isGenerateSenna(qtdNumber, trying + 1)
      }
   }


}

isGenerateSenna(25)
   .then(console.log)
   .catch(console.log)