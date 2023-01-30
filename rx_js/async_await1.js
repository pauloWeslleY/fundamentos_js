function isWaitFor(time = 2000) {
	return new Promise(function (res) {
		setTimeout(() => res(), time)
	});
}

// isWaitFor(3000)
//    .then(() => console.log('Running... 1'))
//    .then(isWaitFor)
//    .then(() => console.log('Running... 2'))
//    .then(isWaitFor)
//    .then(() => console.log('Running... 3'))

function returnValue() {
   return new Promise(resolve => {
      setTimeout(()=> resolve(10), 5000);
   })
}

async function returnValueOne() {
   return 20
}


async function exe() {
   let value = await returnValueOne()

   await isWaitFor(1500)
   console.log(`Async ${value}`)
   await isWaitFor(1500)
   console.log(`Async => ${value + 1}`)
   await isWaitFor(1500)
   console.log(`Async => ${value + 2}`)

   let response = value + 3

   return response
}

async function handleExe() {
   const resp = await exe()
   console.log(resp)
}

handleExe()
