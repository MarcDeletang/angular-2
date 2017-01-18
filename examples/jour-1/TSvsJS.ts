namespace TSJS {
	var messageJS = '42'
	let messageTS: string = '42'


	var constJS = 'const'
	const constTS: string = 'const'

	constJS = 'changed'
		//constTS = 'changed'


	var functionJS = function (message) {
		console.log('functionJS', message)
	}

	var functionTS = (message) => {
		console.log('functionTS', message)
	}


	functionJS('hi')
	functionTS('hi')

	function ObjectJS(message) {
		this.message = message
	}

	class ObjectTS {
		constructor(public message: string) {}
	}

	var objJS = new ObjectJS('Class JS')
	var objTS = new ObjectTS('Class TS')

	console.log(objJS.message)
	console.log(objTS.message)
}