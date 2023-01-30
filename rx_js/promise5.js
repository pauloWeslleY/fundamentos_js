function workedOrNot(value, chanceErr) {
	return new Promise((resolve, reject) => {
      try {
         con.log('temp')
			if (Math.random() < chanceErr) {
				reject('Error Alert!');
			} else {
				resolve(value);
			}
		} catch (error) {
			reject(error);
		}
	});
}

workedOrNot('Testing...', 0.5)
	.then(value => `Value => ${value}`)
	.then(
		idx => console.log(idx),
		err => console.log(`Error ep... => ${err}`),
	)
	.then(() => console.log('Almost There!'))
	.catch(err => console.log(`Error => ${err}`))
	.then(() => console.log('End!!'));
